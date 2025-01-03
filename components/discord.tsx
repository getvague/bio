"use client";

import { Card } from "fumadocs-ui/components/card";
import { CircleDashed, Clock, Code, MessageCircle } from "lucide-react";
import Image from "next/image";
import { type LanyardData, useLanyard } from "react-use-lanyard";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export const SuspenseFallback = () => (
    <div className="rounded-md bg-fd-muted w-fit h-fit flex justify-center items-center border p-4">
        loading...
    </div>
);

export function DiscordStatus() {
    const {
        isLoading,
        isValidating,
        error,
        data: { data: status } = {},
    } = useLanyard({
        userId: "1082690591156088932",
        apiUrl: `api.lanyard.rest`,
    });

    if (isLoading || isValidating || !status) return <SuspenseFallback />;

    const customStatus = status.activities.find((activity) => activity.type === 4);
    const gameActivity = status.activities.find((activity) => activity.type === 0);

    const statusClassMap: Record<LanyardData["discord_status"], string> = {
        online: "text-green",
        idle: "text-yellow",
        dnd: "text-red",
        offline: "text-subtext2",
    };

    const renderActivityImages = (activity: any) => {
        if (!activity?.assets) return null;

        const getImageUrl = (imageKey: string, applicationId: string) => {
            if (!imageKey) return null;
            return imageKey.startsWith("mp:")
                ? `https://media.discordapp.net/external/${imageKey.replace("mp:", "")}`
                : `https://cdn.discordapp.com/app-assets/${applicationId}/${imageKey}.png`;
        };

        const largeImageUrl = getImageUrl(activity.assets.large_image, activity.application_id);
        const smallImageUrl = getImageUrl(activity.assets.small_image, activity.application_id);

        return (
            <div className="relative mr-4">
                {largeImageUrl && (
                    <div className="relative w-20 h-20">
                        <Image
                            src={largeImageUrl}
                            alt={activity.assets.large_text || "Large Image"}
                            className="rounded-lg object-cover"
                            width={80}
                            height={80}
                        />
                    </div>
                )}
                {smallImageUrl && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8">
                        <Image
                            src={smallImageUrl}
                            alt={activity.assets.small_text || "Small Image"}
                            className="rounded-full border-2 border-base object-cover"
                            width={32}
                            height={32}
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <Card
            className="w-fit max-w-full p-4"
            title={`${status.discord_user.global_name || status.discord_user.username}`}
            icon={
                <Tooltip>
                    <TooltipTrigger className="relative block">
                        <Image
                            src={`https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.png`}
                            width={32}
                            height={32}
                            className="rounded-full border"
                            alt="Discord avatar"
                        />
                        <span
                            className={`absolute bottom-1 right-1 transform translate-x-1/2 translate-y-1/2 ${statusClassMap[status.discord_status]}`}
                        >
                            ●
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>{status.discord_status}</TooltipContent>
                </Tooltip>
            }
        >
            <div className="flex flex-col gap-2">
                {customStatus && (
                    <div className="flex flex-row gap-2 items-center">
                        <MessageCircle className="size-4" />
                        <p className="break-words">{customStatus.state}</p>
                    </div>
                )}
                <div className="flex flex-row items-start">
                    {gameActivity ? (
                        <>
                            {renderActivityImages(gameActivity)}
                            <div className="flex flex-col gap-2 flex-grow">
                                <div className="flex items-center gap-2">
                                    <Code className="size-4" />
                                    <p className="break-words">
                                        {gameActivity.name}: {gameActivity.details}
                                    </p>
                                </div>
                                {gameActivity.timestamps && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="size-4" />
                                        <p>{formatElapsedTime(gameActivity.timestamps.start)}</p>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <CircleDashed className="size-4" />
                            <p>Not doing anything</p>
                        </>
                    )}
                </div>
            </div>
        </Card>
    );
}

function formatElapsedTime(startTimestamp: number) {
    const now = Date.now();
    const elapsedMs = now - startTimestamp;
    const hours = Math.floor(elapsedMs / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

import { DiscordStatus, SuspenseFallback } from "@/components/discord";
import { StackProgress } from "@/components/stack-progress";
import { Card } from "fumadocs-ui/components/card";
import { type LucideIcon, Mail, MapPin, Sparkles, Cog } from "lucide-react";
import { Suspense } from "react";
import {
	C,
	Cpp,
	Discord,
	Elixir,
	GitHub,
	Golang,
	HTML,
	Java,
	JavaScript,
	Python,
	TypeScript,
} from "./icons";
type Contact = {
	name: string;
	link: string;
	display: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
};
export default function Home() {
	const projects: {
		name: string;
		description: string;
		link: string;
		Icon?: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
	}[] = [
		{
			name: "Blockify",
			description: "blocky style, ugc games",
			link: "moonsveil",
			Icon: Sparkles,
		},
		{
			name: "TaskWeaver",
			description: "automate browser tasks with selenium",
			link: "",
			Icon: Cog,
		}
		// {
		// 	name: "schoology-frontend",
		// 	description: "alternative frontend for schoology (wip)",
		// 	link: "incognitotgt/schoology-frontend",
		// 	Icon: Rocket,
		// },
		// {
		// 	name: "schoology-ios",
		// 	description: "better mobile app for schoology (wip)",
		// 	link: "incognitotgt/schoology-ios",
		// 	Icon: LayoutGrid,
		// },
	];
	const contact: Contact[] = [
		{
			name: "Discord",
			link: "https://discord.com/users/1082690591156088932",
			display: "undefined.dll",
			Icon: Discord,
		},
		{
			name: "GitHub",
			link: "https://github.com/getvague",
			display: "getvague",
			Icon: GitHub,
		}
	];
	return (
		<div className="p-2 flex flex-col text-md gap-2">
			<section>
				I'm exe (aka Undefined), a fullstack developer & a member of {" "}
				<a
					href="https://github.com/moonsveil"
					className="text-blue font-bold active:text-red hover:text-sky duration-150"
				>
					Moonsveil
				</a>
			</section>
			<div className="flex w-full md:flex-row flex-col">
				<section className="md:w-1/2 flex flex-col gap-2">
					<h2 className="text-2xl font-bold text-mauve">info about me</h2>
					<ul className="list-disc list-inside">
						<li>interested: in LLMs and Science.</li>
						<li>job: developer</li>
					</ul>
					<h2 className="mt-3 text-2xl font-bold text-mauve">my projects</h2>
					<div className="flex flex-wrap gap-2">
						{projects.map(({ Icon, ...project }) => (
							<Card
								className="w-56"
								title={project.name}
								description={project.description}
								href={`https://github.com/${project.link}`}
								key={project.name}
								icon={Icon && <Icon />}
							/>
						))}
					</div>
				</section>
				<section className="mt-3 md:w-1/2 flex flex-col gap-2">
					<h2 className="text-2xl font-bold text-mauve">languages/stack</h2>
					<div className="grid grid-cols-2 w-full gap-2">
						<StackProgress title="Python" progress={50} Icon={Python} />
					</div>
					<h2 className="mt-5 text-2xl font-bold text-mauve">additional knowledge</h2>
					<div className="grid grid-cols-2 w-full gap-2">
						<StackProgress title="C++" progress={19} Icon={Cpp} />
					</div>
				</section>
			</div>
			<hr className="mt-3"/>
			<h2 className="text-2xl font-bold text-mauve">activity</h2>
			<Suspense fallback={<SuspenseFallback />}>
				<DiscordStatus />
			</Suspense>

			<h2 className="mt-3 text-2xl font-bold text-mauve">contact</h2>
					<div className="flex flex-wrap gap-4 justify-center sm:justify-start">
						{contact.map(({ name, display, link, Icon }) => (
							<Card
							className="w-full sm:w-56 flex-shrink-0 flex-grow"
							title={name}
							description={display}
							href={link}
							icon={<Icon className="size-6" />}
							key={name}
							/>
						))}
						<Card 
							className="w-full sm:w-56 flex-grow" 
							title="Location" 
							description="London, UK" 
							icon={<MapPin />} 
						/>
					</div>
		</div>
	);
}

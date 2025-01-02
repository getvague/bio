import { Progress } from "./ui/progress";

export function StackProgress({
	title,
	progress,
	Icon,
}: { title: string; progress: number; Icon: React.FC<React.SVGProps<SVGSVGElement>> }) {
	return (
		<div className="flex flex-col justify-center items-start">
			<span className="text-lg inline-flex items-center">
				<Icon className="inline mr-2" />
				{title}
			</span>
			<Progress value={progress} className="min-w-1/2 -z-10" />
		</div>
	);
}

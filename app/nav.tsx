import Image from "next/image";
import Link from "next/link";
import logo from "./icon.png";
export default function Nav() {
	return (
		<nav className="h-16 fixed bg-mantle/20 rounded-md p-4 flex flex-row justify-between border border-mauve m-[0.5vw] w-[99vw] backdrop-blur-sm">
			<Link
				href="/"
				className="inline-flex justify-center items-center py-4 hover:bg-surface2/70 rounded-md duration-200"
			>
				<Image src={logo} className="size-8 rounded-md mr-2" alt="tgt icon" />
				<h1 className="text-2xl font-bold text-subtext0">Undefined</h1>
			</Link>
		</nav>
	);
}
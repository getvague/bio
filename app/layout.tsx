import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Doto } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Nav from "./nav";
const sans = Doto({ variable: "--font-sans", subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Quentin Blake",
	description: "Personal Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${sans.variable} dark`}>
			<body className="font-sans antialiased bg-base text-text font-medium h-screen flex flex-col overflow-x-hidden selection:bg-surface2/60">
				<TooltipProvider>
					<Nav />
					<main className="mt-20 px-2">{children}</main>
				</TooltipProvider>
				<Analytics />
			</body>
		</html>
	);
}

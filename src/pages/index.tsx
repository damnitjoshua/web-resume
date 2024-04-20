import Image from "next/image";
import { Inter } from "next/font/google";
import { db } from "@/utils/firebase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`${inter.className} mx-auto max-w-2xl`}>
			<h1>Hello World</h1>
		</main>
	);
}

"use client";
import About from "./components/about.mdx";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-center text-4xl font-semibold ">
                Wargen Guittap
            </h1>
            <Image
                src="/profile.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="py-3"
            />
            <h2 className="text-center text-lg text-slate-500 py-3">
                Software Engineer, Data Analyst
            </h2>
            <div className="prose flex flex-col p-6">
                <About />
            </div>
        </div>
    );
}

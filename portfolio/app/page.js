"use client";
import About from "./components/about.mdx";
import Profile from "./components/profile";

export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-center text-4xl font-semibold ">
                Wargen Guittap
            </h1>
            <Profile />
            <h2 className="text-center text-lg text-slate-500 py-3">
                Game Developer, Data Analyst
            </h2>
            <div className="prose flex flex-col p-6">
                <About />
            </div>
        </div>
    );
}

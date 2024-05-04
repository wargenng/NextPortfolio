"use client";
import About from "./components/about.mdx";
import Profile from "./components/profile";

export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1
                className="text-center text-8xl lg:text-[15rem] font-bold leading-[3.5rem]
            hover:leading-[5.5rem] lg:leading-[8rem] lg:hover:leading-[15rem] transition-[line-height] duration-500"
            >
                wargen guittap
            </h1>
            <Profile />
            <h2 className="text-center text-lg p-3 font-bold mb-5">
                Software Engineer · Data Analyst · Tutor · Climber
            </h2>
            <div className="prose flex flex-col w-full p-3">
                <About />
            </div>
        </div>
    );
}

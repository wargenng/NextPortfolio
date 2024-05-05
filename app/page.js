"use client";
import About from "./components/about.mdx";
import Profile from "./components/profile";

export default function Home() {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-center text-8xl lg:text-[12rem] font-bold ">
                wargen guittap
            </h1>
            <Profile />
            <h2 className="text-center text-lg px-3 font-bold mb-10">
                Software Engineer · Data Analyst · Tutor · Climber
            </h2>
            <div className="prose flex flex-col w-full p-3">
                <h1>About Me</h1>
                <About />
            </div>
        </div>
    );
}

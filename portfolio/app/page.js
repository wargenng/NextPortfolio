"use client";
import Link from "next/link";
import About from "./components/about.mdx";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Home() {
    return (
        <div className="flex justify-center w-screen flex-col">
            <div className="w-full p-6 text-lg flex text-slate-500">
                <Link href="/classes" className="grow">
                    woreg.in
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <Link href="/classes" className="px-2">
                            <NavigationMenuItem>Courses</NavigationMenuItem>
                        </Link>
                        <a href="https://github.com/wargenng">
                            <NavigationMenuItem>GitHub</NavigationMenuItem>
                        </a>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <h1 className="text-center text-4xl font-semibold ">
                Wargen Guittap
            </h1>
            <h2 className="text-center text-lg text-slate-500 py-3">
                Software Engineer, Data Analyst
            </h2>
            <div className="prose flex flex-col p-6">
                <About />
            </div>
        </div>
    );
}

"use client";
import Link from "next/link";
import About from "./components/about.mdx";
import Image from "next/image";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="w-full p-6 text-lg flex text-slate-500">
                <Link href="/courses" className="grow">
                    woreg.in
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <Link href="/courses" className="px-2">
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

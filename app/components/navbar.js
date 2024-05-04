"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
    return (
        <div className="w-full p-4 text-lg flex text-primary">
            <Link href="/">woreg.in</Link>
            <div className="grow"></div>
            <NavigationMenu>
                <NavigationMenuList>
                    <Link href="/courses" className="pr-2">
                        <NavigationMenuItem>Courses</NavigationMenuItem>
                    </Link>
                    <a href="https://github.com/wargenng" className="pr-2">
                        <NavigationMenuItem>GitHub</NavigationMenuItem>
                    </a>
                    <a href="/resume.pdf">
                        <NavigationMenuItem>Resume</NavigationMenuItem>
                    </a>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

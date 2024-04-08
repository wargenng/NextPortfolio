"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
    return (
        <div className="w-full p-6 text-lg flex text-slate-500">
            <Link href="/">woreg.in</Link>
            <div className="grow"></div>
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
    );
}

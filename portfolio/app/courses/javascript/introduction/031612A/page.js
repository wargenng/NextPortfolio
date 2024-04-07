"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const path = usePathname();
    return (
        <div className="flex flex-col items-center w-screen h-screen p-8">
            <Link href={`${path}/week1`}>
                Week 1: Introduction to JavaScript
            </Link>
            <Link href={`${path}/week2`}>
                Week 2: Control Flow, Functions, and Arrow Functions
            </Link>
            <Link href={`${path}/week3`}>
                Week 3: Data Structures in JavaScript
            </Link>
            <Link href={`${path}/week4`}>
                Week 4: Document Object Model (DOM) Manipulation
            </Link>
        </div>
    );
}

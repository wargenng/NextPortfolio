"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const path = usePathname();

    return (
        <div className="flex flex-col items-center w-screen h-screen p-8">
            <Link href={`${path}/week1`}>Week 1: Introduction to Python</Link>
        </div>
    );
}

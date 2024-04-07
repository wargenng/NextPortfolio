"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const path = usePathname();
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <Link href={`${path}/week1`}>Week 1: Advanced Data Structures</Link>
            <Link href={`${path}/week2`}>
                Week 2: File Handling and Input/Output Operations
            </Link>
        </div>
    );
}

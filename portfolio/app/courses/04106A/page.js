"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const path = usePathname();
    return <div className="flex flex-col items-center w-screen h-screen"></div>;
}

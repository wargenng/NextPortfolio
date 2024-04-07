import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-screen h-screen p-8">
            <Link href="/week1">Week 1: Introduction to JavaScript</Link>
            <Link href="/week2">
                Week 2: Control Flow, Functions, and Arrow Functions
            </Link>
            <Link href="/week3">Week 3: Data Structures in JavaScript</Link>
            <Link href="/week4">
                Week 4: Document Object Model (DOM) Manipulation
            </Link>
        </div>
    );
}

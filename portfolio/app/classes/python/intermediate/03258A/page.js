import Link from "next/link";

export default function Python() {
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <Link
                href="/classes/python/intermediate/03258A/week1"
                className="flex justify-center"
            >
                Week 1: Advanced Data Structures
            </Link>
            <Link
                href="/classes/python/intermediate/03258A/week2"
                className="flex justify-center"
            >
                Week 2: File Handling and Input/Output Operations
            </Link>
        </div>
    );
}

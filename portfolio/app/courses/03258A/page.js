"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const path = usePathname();
    const course = [
        { week: "Advanced Data Structures" },
        { week: "File Handling and Input/Output Operations" },
        { week: "Functional Programming in Python" },
    ];

    return (
        <div className="flex flex-col h-screen p-6">
            <h1>Intermediate Python for Adults</h1>

            {course.map((week, i) => (
                <Link
                    href={`${path}/week${i + 1}`}
                    key={`${path}/week${i + 1}`}
                    className="py-3"
                >
                    <h1 className="text-xl font-semibold ">Week {i + 1}</h1>
                    <p className="text-sm italic text-slate-500">{week.week}</p>
                </Link>
            ))}
        </div>
    );
}

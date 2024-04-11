"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LessonPlans(props) {
    const path = usePathname();
    const posts = props.posts.map((lesson) =>
        lesson
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    );

    return (
        <div className="flex flex-col w-full lg:w-1/2 h-screen p-8">
            <h1>{props.course}</h1>

            {props.posts.map((post, i) => (
                <Link
                    href={`${path}/${post}`}
                    key={`${path}/${post}`}
                    className="py-3"
                >
                    <p className="text-sm italic text-slate-500">{posts[i]}</p>
                </Link>
            ))}
        </div>
    );
}

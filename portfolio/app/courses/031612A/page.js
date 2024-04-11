"use client";

import { usePathname } from "next/navigation";
import LessonPlans from "../components/lessonplans";

export default function Page() {
    const path = usePathname();
    const course = "Introduction to JavaScript";
    const weeks = [
        { week: "Introduction to JavaScript" },
        { week: "Control Flow, Functions, and Arrow Functions" },
        { week: "Data Structures in JavaScript" },
        { week: "Week 4: Document Object Model (DOM) Manipulation" },
    ];

    return <LessonPlans path={path} course={course} weeks={weeks} />;
}

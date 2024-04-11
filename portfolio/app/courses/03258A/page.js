"use client";

import { usePathname } from "next/navigation";
import LessonPlans from "../components/lessonplans";

export default function Page() {
    const path = usePathname();
    const course = "Intermediate Python for Adults";
    const weeks = [
        { week: "Advanced Data Structures" },
        { week: "File Handling and Input/Output Operations" },
        { week: "Functional Programming in Python" },
    ];

    return <LessonPlans path={path} course={course} weeks={weeks} />;
}

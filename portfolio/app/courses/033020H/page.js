"use client";

import { usePathname } from "next/navigation";
import LessonPlans from "../components/lessonplans";

export default function Page() {
    const path = usePathname();
    const course = "Javascript Coding Academy";
    const weeks = [];

    return <LessonPlans path={path} course={course} weeks={weeks} />;
}

"use client";

import { usePathname } from "next/navigation";
import LessonPlans from "../components/lessonplans";

export default function Page() {
    const path = usePathname();
    const course = "Using Chat-GPT for Students & Young Professionals";
    const weeks = [{ week: "Introduction to AI & Chat-GPT" }];

    return <LessonPlans path={path} course={course} weeks={weeks} />;
}

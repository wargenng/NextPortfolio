"use client";

import { usePathname } from "next/navigation";
import LessonPlans from "../components/lessonplans";

export default function Page() {
    const path = usePathname();
    const course = "Introduction to JavaScript";
    const weeks = [{ week: "Introduction to JavaScript" }];

    return <LessonPlans path={path} course={course} weeks={weeks} />;
}

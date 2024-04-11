"use client";

import { usePathname } from "next/navigation";
import LessonPlans from "../components/lessonplans";

export default function Page() {
    const path = usePathname();
    const course = "Introduction to Python";
    const weeks = [{ week: "Introduction to Python" }];

    return <LessonPlans path={path} course={course} weeks={weeks} />;
}

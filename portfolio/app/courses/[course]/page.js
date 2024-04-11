"use server";

import LessonPlans from "../components/lessonplans";
import { promises as fs } from "fs";

export default async function Page({ params }) {
    const file = await fs.readFile(
        process.cwd() + "/app/courses/courses.json",
        "utf8"
    );
    const data = JSON.parse(file);
    const course = data.classes.find(
        (course) => course.classId === params.course
    );

    return <LessonPlans course={course.class} posts={course.lessons} />;
}

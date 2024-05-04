"use server";

import Link from "next/link";
import { getDayOfWeek } from "./components/getDayOfWeek";
import { courses } from "./courses";

export default async function Page() {
    return (
        <div className="flex flex-col w-full lg:w-2/3 h-screen p-8">
            <h1 className="text-4xl pb-3 font-bold">Courses</h1>
            {courses.classes.map((course) => (
                <Link
                    href={`/courses/${course.classId}`}
                    key={course.classId}
                    className="p-5 rounded-lg mb-5 border border-primary hover:border-rose-100]"
                >
                    <h1 className="text-2xl font-bold ">{course.classId}</h1>
                    <p>{course.class}</p>
                    <p className="italic text-slate-500">
                        {getDayOfWeek(course.startDate) +
                            " @" +
                            course.startTime +
                            " " +
                            courses.timezone}
                    </p>
                    <h1 className="font-bold">description</h1>
                    <p>{course.description}</p>
                </Link>
            ))}
        </div>
    );
}

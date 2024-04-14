"use server";

import Link from "next/link";
import { getDayOfWeek } from "./components/getDayOfWeek";
import { courses } from "./courses";

export default async function Page() {
    return (
        <div className="flex flex-col w-full lg:w-1/2 h-screen p-8">
            <h1 className="text-4xl pb-3 font-bold">Courses</h1>
            {courses.classes.map((course) => (
                <Link
                    href={`/courses/${course.classId}`}
                    key={course.classId}
                    className="pb-5 "
                >
                    <h1 className="text-2xl font-semibold text-sky-600">
                        {course.classId}
                    </h1>
                    <p>{course.class}</p>
                    <p className="italic text-slate-500">
                        {getDayOfWeek(course.startDate) +
                            " @" +
                            course.startTime +
                            " " +
                            courses.timezone}
                    </p>
                </Link>
            ))}
        </div>
    );
}

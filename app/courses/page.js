"use server";

import Link from "next/link";
import { getDayOfWeek } from "./components/getDayOfWeek";
import { courses } from "./courses";

export default async function Page() {
    return (
        <div className="flex flex-col w-full h-screen p-8">
            <h1 className="text-5xl lg:text-8xl pb-3 font-bold">Tutoring</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {courses.classes.map((course) => (
                    <Link
                        href={`/courses/${course.classId}`}
                        key={course.classId}
                        className="p-5 rounded-lg m-2 lg:m-5 
                        border border-primary hover:border-rose-500 
                        transition-transform duration-500 
                        translate-y-0 hover:translate-y-[-1rem]"
                    >
                        <h1 className="text-2xl font-bold ">
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
                        <div className="hidden lg:block">
                            <h1 className="font-bold">description</h1>
                            <p>{truncateString(course.description, 150)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    }
    return str;
}

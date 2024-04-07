"use server";

import Link from "next/link";
import { promises as fs } from "fs";

export default async function Page() {
    const file = await fs.readFile(
        process.cwd() + "/app/classes/classes.json",
        "utf8"
    );
    const data = JSON.parse(file);

    return (
        <div className="flex flex-col items-center w-screen h-screen">
            {data.classes.map((course) => (
                <Link
                    href={`/classes/${course.subject.toLowerCase()}/${course.classType.toLowerCase()}/${
                        course.classId
                    }`}
                    key={course.classId}
                >
                    {course.class + " " + course.classId}
                </Link>
            ))}
        </div>
    );
}

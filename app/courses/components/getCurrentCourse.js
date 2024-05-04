"use server";

import { promises as fs } from "fs";

export async function getCurrentCourse(classId) {
    const file = await fs.readFile(
        process.cwd() + "/app/courses/courses.json",
        "utf8"
    );
    const data = JSON.parse(file);

    return data.classes.find((obj) => obj.classId === classId);
}

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getCurrentCourse } from "@/app/courses/components/getCurrentCourse";

export default async function Page() {
    const path = usePathname();
    console.log(path.split("/").at(-1));

    // const course = await getCurrentCourse(path.split("/").at(-1));
    // console.log(course);
    return (
        <>
            <div className="w-full px-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/courses">
                                Courses
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>JS04075A</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex flex-col items-center w-screen h-screen p-8">
                <Link href={`${path}/week1`}>
                    Week 1: Introduction to JavaScript
                </Link>
            </div>
        </>
    );
}

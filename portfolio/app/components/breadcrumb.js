"use client";

import { usePathname } from "next/navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Bread() {
    const path = usePathname();
    if (path.length < 2) return;
    let breadlist = path.split("/");
    breadlist.shift();

    let breadObj = [{ link: "/", title: "Home" }];
    let currentPath = "";
    breadlist.forEach((bread) => {
        currentPath += "/" + bread;
        let tempObj = {
            link: currentPath,
            title: capitalizeFirstLetter(bread),
        };
        breadObj.push(tempObj);
    });

    return (
        <div className="w-full px-6">
            <Breadcrumb>
                <BreadcrumbList>
                    {breadObj.map((bread, i) => (
                        <div
                            key={bread.link}
                            className="flex justify-center items-center"
                        >
                            <BreadcrumbItem className="pr-2">
                                <BreadcrumbLink href={bread.link}>
                                    {bread.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {i < breadObj.length - 1 ? (
                                <BreadcrumbSeparator />
                            ) : null}
                        </div>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

export function capitalizeFirstLetter(str) {
    return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

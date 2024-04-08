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
    // Check if the first character is a letter by using a regular expression
    if (str.charAt(0).match(/[a-z]/i)) {
        // If it's a letter, convert the first character to uppercase
        // and concatenate it with the rest of the string
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    // If the first character is not a letter, return the original string
    return str;
}

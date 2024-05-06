"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

export default function Pagination(props) {
    const path = usePathname().split("/").slice(0, -1).join("/") + "/";
    const previousPath =
        props.page === 0 ? path : path + props.lesson[props.page - 1];
    const previousName =
        props.page === 0
            ? "Back to " + path.split("/").at(-2)
            : capitalizeFirstLetter(props.lesson[props.page - 1]);
    const nextPath =
        props.page === props.lesson.length - 1
            ? path
            : path + props.lesson[props.page + 1];
    const nextName =
        props.page === props.lesson.length - 1
            ? "Back to " + path.split("/").at(-2)
            : capitalizeFirstLetter(props.lesson[props.page + 1]);

    return (
        <div className="w-full flex text-sm">
            <Link href={previousPath} className="">
                <div className="flex justify-center items-center">
                    <VscChevronLeft />
                    <p className="pl-2">{truncateString(previousName, 15)}</p>
                </div>
            </Link>

            <div className="grow" />
            <Link href={nextPath} className="">
                <div className="flex justify-center items-center">
                    <p className="pr-2">{truncateString(nextName, 15)}</p>
                    <VscChevronRight />
                </div>
            </Link>
        </div>
    );
}

export function capitalizeFirstLetter(str) {
    return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    }
    return str;
}

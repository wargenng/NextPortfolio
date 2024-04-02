import Link from "next/link";

export default function Classes() {
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <Link
                href="/classes/python/intermediate/03258A"
                className="flex justify-center"
            >
                Intermediate Python for Adults 03258A
            </Link>
            <Link
                href="/classes/python/introduction/04106A"
                className="flex justify-center"
            >
                Introduction Python for Adults 04106A
            </Link>
            <Link
                href="/classes/javascript/academy/03056H"
                className="flex justify-center"
            >
                Javascript Coding Academy 03056H
            </Link>
        </div>
    );
}

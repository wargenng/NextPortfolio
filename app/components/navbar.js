"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav(!showNav);
    };

    return (
        <div className="w-full p-4 text-lg flex text-primary">
            <Link href="/">wargen guittap</Link>
            <div className="grow"></div>
            <div className="block lg:hidden mt-1">
                <GiHamburgerMenu onClick={handleClick} />
            </div>
            {showNav ? (
                <div className="fixed w-screen h-screen top-0 bg-background z-10">
                    <IoMdClose
                        className="fixed right-0 mt-3 mr-2"
                        size="2rem"
                        onClick={handleClick}
                    />
                    <div
                        className="mt-12 ml-6 flex flex-col gap-y-3 text-2xl font-bold"
                        onClick={handleClick}
                    >
                        <Link href="/" className="mr-4">
                            Home
                        </Link>
                        <Link href="/courses" className="mr-4">
                            Tutoring
                        </Link>
                        <a href="https://github.com/wargenng" className="mr-4">
                            GitHub
                        </a>
                        <a href="/resume.pdf">Resume</a>
                    </div>
                </div>
            ) : null}
            <div className="hidden lg:block">
                <Link href="/courses" className="mr-4">
                    Tutoring
                </Link>
                <a href="https://github.com/wargenng" className="mr-4">
                    GitHub
                </a>
                <a href="/resume.pdf">Resume</a>
            </div>
        </div>
    );
}

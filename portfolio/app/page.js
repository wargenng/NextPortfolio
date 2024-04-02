import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <Link href="/classes">Classes</Link>
        </div>
    );
}

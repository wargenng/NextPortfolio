import Link from "next/link";

export default function Home() {
    return (
        <div className="flex justify-center w-screen h-screen">
            <Link href="/classes">Classes</Link>
        </div>
    );
}

import Link from "next/link";

export default function LessonPlans(props) {
    const convertPost = (lesson) =>
        lesson
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    return (
        <div className="flex flex-col w-full lg:w-1/2 h-screen p-8">
            <h1 className="text-4xl pb-3 font-bold">{props.course}</h1>
            {props.posts.map((post) => (
                <div key={`${props.courseID}/${post}`}>
                    <h2 className="pb-3 text-xl text-sky-600 font-semibold">
                        Lesson {post.id}
                    </h2>
                    {post.lesson.map((lesson) => (
                        <Link
                            href={`${props.courseID}/${lesson}`}
                            key={`${props.courseID}/${lesson}`}
                            className="py-5"
                        >
                            <p className="text-sm underline italic text-slate-500 pb-3">
                                {convertPost(lesson)}
                            </p>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
}

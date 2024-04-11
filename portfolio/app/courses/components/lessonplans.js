import Link from "next/link";

export default function LessonPlans(props) {
    return (
        <div className="flex flex-col w-full lg:w-1/2 h-screen p-8">
            <h1>{props.course}</h1>

            {props.weeks.map((week, i) => (
                <Link
                    href={`${props.path}/week${i + 1}`}
                    key={`${props.path}/week${i + 1}`}
                    className="py-3"
                >
                    <h1 className="text-xl font-semibold ">Week {i + 1}</h1>
                    <p className="text-sm italic text-slate-500">{week.week}</p>
                </Link>
            ))}
        </div>
    );
}

import dynamic from "next/dynamic";
import { courses } from "../../courses";

export default async function Page({ params }) {
    const course = courses.classes.find(
        (course) => course.classId === params.course
    );

    const Post = dynamic(
        () => import(`./${course.subject}/${params.post}.mdx`),
        {
            ssr: false,
        }
    );
    return (
        <div className="prose flex flex-col p-8 w-full h-full">
            <Post />
        </div>
    );
}

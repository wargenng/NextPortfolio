import dynamic from "next/dynamic";
import { courses } from "../../courses";
import Pagination from "../../components/pagination";

export async function generateStaticParams() {
    const classes = courses.classes;
    const classLessonParams = classes.map((course) => {
        return course.lessons.map((lesson) => {
            return lesson.lesson.map((post) => {
                return {
                    course: course.classId,
                    post,
                };
            });
        });
    });
    return classLessonParams.flat(2);
}

export default async function Page({ params }) {
    const course = courses.classes.find(
        (course) => course.classId === params.course
    );

    function findIndexOfLesson(data, lessonName) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].lesson.includes(lessonName)) {
                return i; // Return the index of the first match
            }
        }
    }

    const Post = dynamic(
        () => import(`./${course.subject}/${params.post}.mdx`),
        {
            ssr: true,
        }
    );

    const currentLesson =
        course.lessons[findIndexOfLesson(course.lessons, params.post)];
    const currentPage = currentLesson.lesson.indexOf(params.post);

    return (
        <div className="prose flex flex-col p-8 w-full h-full">
            <Post />
            <Pagination lesson={currentLesson.lesson} page={currentPage} />
        </div>
    );
}

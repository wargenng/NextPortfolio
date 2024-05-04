import { courses } from "../courses";
import LessonPlans from "../components/lessonplans";

export async function generateStaticParams() {
    return courses.classes.map((course) => ({ course: course.classId }));
}

export default function Page({ params }) {
    const course = courses.classes.find(
        (course) => course.classId === params.course
    );

    return (
        <LessonPlans
            courseID={params.course}
            course={course.class}
            posts={course.lessons}
            description={course.description}
        />
    );
}

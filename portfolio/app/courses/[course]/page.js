import { courses } from "../courses";
import LessonPlans from "../components/lessonplans";

export default function Page({ params }) {
    const course = courses.classes.find(
        (course) => course.classId === params.course
    );

    return <LessonPlans course={course.class} posts={course.lessons} />;
}

import { type ReactNode } from "react";

interface CourseGoalPros {
    title: string;
    children: ReactNode;
}

export default function CourseGoal({ title, children}: CourseGoalPros) {
    return (
        <article>
            <div>
                <h2>{title} </h2>
                <p>{children}</p>
            </div>
            <button>Delete</button>
        </article>
    )


}
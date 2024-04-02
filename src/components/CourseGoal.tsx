import { PropsWithChildren } from "react";

// interface CourseGoalPros {
//     title: string;
//     id: number;
//     children: ReactNode;
//     onDelete: (id: number) => void;
// }

type CourseGoalPros = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;


export default function CourseGoal({ title, children, id, onDelete }: CourseGoalPros) {
    return (
        <article>
            <div>
                <h2>{title} </h2>
                <p>{children}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )


}
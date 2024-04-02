import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";

type CoursefoalListProps = {
  goals: CGoal[]
  onDeleteGoal: (id: number) => void
};


export default function CourseGoalList({ goals, onDeleteGoal }: CoursefoalListProps) {
  return (
    <ul>
      {goals.map((goal) => <li>
        <CourseGoal
          id={goal.id}
          title={goal.title}
          onDelete={onDeleteGoal}>
          <p>{goal.description}</p>
        </CourseGoal>
      </li>)}
    </ul>
  );
}
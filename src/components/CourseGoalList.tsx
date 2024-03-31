import CourseGoal from "./CourseGoal";


export default function CourseGoalList(goals: CourseGoal[]) {
return (
    <ul>
    {goals.map((goal) => <li>
      <CourseGoal
        title={goal.title}>
        <p>{goal.description}</p>
      </CourseGoal>
    </li>)}
  </ul>
);
}
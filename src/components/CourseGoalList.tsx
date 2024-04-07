import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";

type CoursefoalListProps = {
  goals: CGoal[]
  onDeleteGoal: (id: number) => void
};


export default function CourseGoalList({ goals, onDeleteGoal }: CoursefoalListProps) {
  if(goals.length === 0) {
    return <InfoBox mode="hint"> You haver no goals :/</InfoBox>
  }
  let warningBox: ReactNode
  if(goals.length >= 4){
    warningBox = <InfoBox mode="warning" severity="medium">No te pases wey</InfoBox>
  }

  return (
    <>
    {warningBox}
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
    </>
  );
}
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string,
  description: string,
  id: number;
}

export default function App() {
  /*useState returns an array with exactly two elements,
  the first element is the current state snapshot
  for this current function execution cycle,
  the second element is a function we can call
  to update that state snapshot*/
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary

      };
      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'Image here' }}>
        <h1>My goals?</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}></NewGoal>
      <CourseGoalList goals = {goals} 
      onDeleteGoal= {handleDeleteGoal}/>
    </main>
  );
}

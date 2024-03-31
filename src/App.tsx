import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import { useState } from "react";

type CourseGoal = {
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

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'just the title for the goal',
        description: 'description for the goal'

      };
      return [...prevGoals, newGoal]
    });

  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'Image here' }}>
        <h1>My goals?</h1>
      </Header>
      <button onClick={handleAddGoal}>Add goal</button>
      <ul>
        {goals.map((goal) => <li>
          <CourseGoal
            title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>)}
      </ul>
    </main>
  );
}

import React, { useState } from "react";
import Hero from "./Components/Hero";
import Generator from "./Components/Generator";
import Workout from "./Components/Workout";
import { generate } from "./utils/generateExecise";

const App = () => {
  const [workout, setWorkout] = useState(null);

  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");
  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }

    let nwork = generate({ poison, muscles, goal });
    setWorkout(nwork);
    console.log(nwork);
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base grid-rows-3 grid-cols-1 padX-10">
      <Hero></Hero>
      <Generator
        workout={workout}
        setWorkout={setWorkout}
        poison={poison}
        setPoison={setPoison}
        setGoal={setGoal}
        goal={goal}
        muscles={muscles}
        setMuscles={setMuscles}
        updateWorkout={updateWorkout}
      ></Generator>
      {workout && <Workout workout={workout}></Workout>}
    </main>
  );
};

export default App;

import React, { useState } from "react";
import music from "./Music1.mp3";
const ExerciseCard = ({ workout, index }) => {
  const [completed, setCompleted] = useState(0);

  function complete() {
    setCompleted((completed + 1) % 6);
  }
  return (
    <div
      className={
        "pad20 bg-zinc-950 rounded-md flex flex-col gap-4 sm:flex-wrap  select-none "
      }
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{index + 1}
        </h4>
        <h2 className="capitalized whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-3xl flex-1">
          {workout.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{workout.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-slate-400  text-sm">Muscle group</h3>
        <p className="capitalize">{workout.muscles.join(" & ")}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4  sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              className="flex flex-col pad20 rounded border border-solid border-slate-900 w-full"
              key={info}
            >
              <h3 className="text-xl text-slate-300 capitalize">
                {info == "reps" ? `${workout.unit}` : info}
              </h3>
              <p className={"font-medium"}>{workout[info]}</p>
            </div>
          );
        })}
        <div
          className={
            "flex flex-col  padX-110 items-center justify-center rounded border border-solid border-white w-full bg-blue-900 cursor-pointer hover:bg-blue-950 " +
            (completed == 5 ? "bg-green-800" : "")
          }
          onClick={async () => {
            await new Audio(music).play();
            complete();
          }}
        >
          <h3 className="text-xl  capitalize">Sets Completed</h3>
          <p>{completed || 0}/5</p>
        </div>
      </div>
      <div className="flex flex-col bg-slate-950 rounded gap-2 text-justify p-2 ">
        {workout.description.split("___").map((val) => {
          return <div className="text-sm">{val}</div>;
        })}
      </div>
    </div>
  );
};

export default ExerciseCard;

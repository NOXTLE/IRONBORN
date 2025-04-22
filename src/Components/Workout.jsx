import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const Workout = ({ workout }) => {
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to"}
      title={["The", "Danger", "Zone"]}
    >
      <div className="flex flex-col  gap-4">
        {workout.map((e, i) => {
          return <ExerciseCard workout={e} key={i} index={i} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;

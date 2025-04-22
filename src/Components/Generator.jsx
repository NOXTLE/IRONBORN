import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FaCaretDown } from "react-icons/fa";
import { SCHEMES, WORKOUTS } from "../utils/swolder";
import musicFile from "./Music.mp3";
const Generator = ({
  poison,
  setPoison,
  goal,
  setGoal,
  muscles,
  setMuscles,
  updateWorkout,
}) => {
  let [showModal, setshowModal] = useState(false);
  function updateMuscles(muscleGrp) {
    if (muscles.includes(muscleGrp)) {
      setMuscles([...muscles.filter((msc, ind) => msc != muscleGrp)]);
      return;
    }
    if (muscles.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscleGrp]);
      setshowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGrp]);
  }

  return (
    <SectionWrapper
      header={"generate Your Workout"}
      title={["It's", "IRON", "Time"]}
      id={"generate"}
    >
      <Header
        index={"01"}
        title={"Pick Your Split"}
        description={"Select the workout you wish to endure"}
      ></Header>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
        {Object.keys(WORKOUTS).map((type, index) => {
          return (
            <button
              onClick={() => {
                setPoison(type);
                setMuscles([]);
              }}
              key={index}
              className={
                (type == poison ? "border-blue-600" : "border-blue-400 ") +
                " duration-200 hover:border-blue-600  hover:cursor-pointer pad-20 bg-slate-950 border border-blue-400  rounded-lg"
              }
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      {/* 
      
      
      
      
      
      */}

      <Header
        index={"02"}
        title={"Lock On Targets"}
        description={"Select the muscles for total destruction"}
      ></Header>

      <div className="bg-slate-950 pad20 border   rounded-lg border-solid border-blue-400">
        <div
          className="relative cursor-pointer "
          onClick={() => setshowModal(!showModal)}
        >
          <p className="mb-2">
            {muscles.length == 0
              ? "Select Muscle Group"
              : `Muscles Selected : ${muscles.join(" & ")}`}
          </p>
          <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
        {showModal && (
          <div className="flex flex-col mt-2">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((grp, index) => {
              return (
                <div
                  onClick={() => {
                    updateMuscles(grp);
                  }}
                  className={
                    "  hover:text-blue-400 cursor-pointer select-none text-blue-200 " +
                    (muscles.includes(grp) ? "text-blue-400" : "text-white")
                  }
                  key={grp.replaceAll("_", " ")}
                >
                  {grp}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Swollen"}
        description={"Select your ultimate objective"}
      ></Header>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        {Object.keys(SCHEMES).map((type, index) => {
          return (
            <button
              onClick={() => {
                setGoal(type);
              }}
              key={index}
              className={
                "duration-200 hover:border-blue-600 hover:cursor-pointer pad-20 bg-slate-950 border border-blue-400  rounded-lg " +
                (type == goal ? "border-blue-600" : "border-blue-400:")
              }
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <button
        onClick={async () => {
          updateWorkout();
          await new Audio(musicFile).play();
          setTimeout(() => {
            window.location.href = "#workout";
          }, 500);
        }}
        id="hero-btn2"
        className="flex items-center self-center justify-center w-[300px] blueShadow hover:cursor-pointer px-8 py-4 rounded-lg 
         mb-110 border-blue-400  text-2xl 
       "
      >
        Generate
      </button>
    </SectionWrapper>
  );
};

export default Generator;

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4  items-center">
      <div className="flex items-center gap-2  text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl lg:font-semibold ">
          {title}
        </h4>
      </div>
      <p className="text-xl  text-center ">{description}</p>
    </div>
  );
}

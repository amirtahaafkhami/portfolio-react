import ProgressBar from "./ProgressBar";
import ProgressCircle from "./ProgressCircle";

function Skills() {
  return (
    <section id="skills-tab" className="h-[100vh] relative left-2 w-full flex justify-center items-center">
      <div className="w-[50%] h-[50%] flex flex-col justify-around">
        <ProgressBar text="HTML, CSS, Tailwind CSS" percentage="w-[95%]" />
        <ProgressBar text="MERN Stack" percentage="w-[90%]" />
        <ProgressBar text="Python" percentage="w-[85%]" />
        <ProgressBar text="Algorithms and Optimization" percentage="w-[70%]" />
        <ProgressCircle text="English Level" />
      </div>
    </section>
  );
}

export default Skills;
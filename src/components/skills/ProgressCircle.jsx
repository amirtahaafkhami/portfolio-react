function ProgressCircle(props) {
  return (
    <div className="w-full flex justify-between">
      <div className="mb-2 font-GilroySemiBold md:text-[20pt] sm:text-[16pt] text-[14pt] inline-block">{props.text}</div>
      <div className="w-[50%] flex justify-between sm:mt-4 mt-2">
        <div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300/30"></div>
        </div>
        <div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300/30"></div>
        </div>
        <div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300/30"></div>
        </div>
        <div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300/30"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300"></div>
          <h1 className="font-GilroyLight text-[15pt] mt-2">C1</h1>
        </div>
        <div>
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300/30"></div>
        </div>
      </div>
    </div>
  );
}
export default ProgressCircle;
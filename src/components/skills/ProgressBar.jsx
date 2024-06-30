function ProgressBar(props) {
  return (
    <div className="w-full">
      <div className="mb-1 font-GilroySemiBold md:text-[20pt] text-[16pt]">{props.text}</div>
      <div className="w-full bg-slate-300/30 rounded-full h-1.5">
        <div className={`bg-slate-300 h-1.5 rounded-full ${props.percentage}`}></div>
      </div>
    </div>
  );
}
export default ProgressBar;

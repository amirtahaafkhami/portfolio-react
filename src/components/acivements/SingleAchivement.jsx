function SingleAchivement(props) {
  return (
    <div className="flex flex-col items-center relative -ml-12">
      <div id="single-achivement" className="flex flex-col items-center justify-center w-[500px] h-[250px] slate border-b-4">
        <h1 className="font-GilroyBold text-[40pt] text-slate-50/30">{props.competition}</h1>
        <h1 className={"font-GilroyLight text-[30pt]" + " " + props.colorName}>
          {props.award}, <span className="text-slate-100/30">{props.category}</span>
        </h1>
      </div>
    </div>
  );
}
export default SingleAchivement;

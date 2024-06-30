function SingleAchivement(props) {
  return (
    <div className="flex flex-col items-center relative md:-ml-12">
      <div id="single-achivement" className="flex flex-col items-center justify-center md:w-[500px] w-[250px] md:h-[250px] h-[125px] slate border-b-4">
        <h1 className="font-GilroyBold md:text-[40pt] text-[25pt] text-slate-50/30">{props.competition}</h1>
        <h1 className={"font-GilroyLight md:text-[30pt] text-[15pt]" + " " + props.colorName}>
          {props.award}, <span className="text-slate-100/30">{props.category}</span>
        </h1>
      </div>
    </div>
  );
}
export default SingleAchivement;

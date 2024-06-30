// import sprite from "./sprite.svg";
function Icon(props) {
  return (
    <li className="transition-all h-6">
      {/* // hover:h-8 */}
      <a href={"#" + props.iconName + "-tab"} className="block">
        <svg className="transition-all duration-500 w-12 h-12 flex justify-center items-center drop-shadow-2xl rounded-full hover:drop-shadow-2xl text-slate-300/30 hover:text-slate-300">
          <use href={"#" + props.iconName} />
          {/* // hover:w-20 hover:h-20 */}
        </svg>
      </a>
    </li>
  );
}

export default Icon;

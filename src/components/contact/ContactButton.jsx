// import sprite from "./sprite.svg";
function ContactButton(props) {
  const text = "+989153773822";
  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
  return (
    <a href={props.hrefText}>
      <svg className={"w-20 h-20 cursor-pointer hover:h-28 hover:w-28 transition-all duration-500" + " " + (props.iconName !== "phone" ? "" : "w-16 h-16 hover:h-24 hover:w-24")} onClick={copyText()}>
        <use href={"#" + props.iconName}></use>
      </svg>
    </a>
  );
}
export default ContactButton;

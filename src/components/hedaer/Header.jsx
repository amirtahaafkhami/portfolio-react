import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Icon from "./Icon";

function Header() {
  const [navbarVisibility, setNavbarVisibility] = useState("visible");
  return (
    <header id="home-tab" className={"h-[100vh] flex"}>
      <div id="navbar" className="fixed h-full items-center justify-center overflow-x-hidden hidden md:flex" onClick={() => setNavbarVisibility(navbarVisibility === "hidden" ? "visible" : "hidden")}>
        <div className={"relative flex flex-col items-center justify-center w-32 h-[100vh] bg-slate-50/10 transition-all duration-1000 border-r border-slate-50/20 cursor-pointer" + " " + (navbarVisibility === "visible" ? "-left-32" : "left-0")}>
          <ul className="flex flex-col items-center justify-between h-[50%]">
            <Icon iconName="home" />
            <Icon iconName="about" />
            <Icon iconName="skills" />
            <Icon iconName="achivements" />
            <Icon iconName="contact" />
          </ul>
        </div>
        <h1 className={"relative text-center rotate-[270deg] font-Gilroy tracking-[14px] cursor-pointer transition-all duration-1000 text-[20pt]" + " " + (navbarVisibility === "hidden" ? "left-10 opacity-0" : "-left-32")} onClick={() => setNavbarVisibility(navbarVisibility === "hidden" ? "visible" : "hidden")}>
          MENU
        </h1>
      </div>
      <div id="banner" className="h-full w-[100vw] flex flex-col justify-center items-center md:pl-16">
        <div id="header-text-container" className="text-center md:left-8 relative">
          <h1 className="font-GilroyBlack text-[45pt] md:text-[70pt]">I am Amirtaha Afkhami.</h1>
          <TypeAnimation sequence={["I am a Web Developer.", 1000, "I am a programming teacher.", 1000, "I am an AI team manager.", 1000]} repeat={Infinity} />
        </div>
      </div>
    </header>
  );
}
export default Header;

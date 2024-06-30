// import { useEffect, useState } from "react";
import Header from "./components/hedaer/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Achivements from "./components/acivements/Achivements";
import Contact from "./components/contact/Contact";
import Sprite from "./assets/svgs/Spriteprite";

function App() {
  // const [scrollYPosition, setScrollYPosition] = useState(0);
  // const [pageNumber, setPageNumber] = useState(0);
  // const handleScroll = () => {
  //   const newScrollYPosition = window.pageYOffset;
  //   setScrollYPosition(newScrollYPosition);
  //   setPageNumber((scrollYPosition / window.innerHeight) / 2);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // console.log(scrollYPosition);
  // console.log(pageNumber);
  
  // if (pageNumber > 1) {
  //   console.log("wellll");
  // }
  return (
    <>
      <Sprite />
      <Header />
      <main className="relative md:w-[calc(100vw-8rem)] w-full h-[100vh] md:ml-36">
        <About />
        <Skills />
        <Achivements />
        <Contact />
      </main>
    </>
  );
}

export default App;

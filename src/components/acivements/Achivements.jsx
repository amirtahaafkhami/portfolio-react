import SingleAchivement from "./SingleAchivement";

function Achivements() {
  return (
    <section id="achivements-tab" className="min-h-[100vh] max-h-[200vh] w-full flex items-center justify-center lg:left-4">
      <div className="flex md:flex-row flex-col items-center justify-center flex-wrap lg:gap-0 gap-10 h-[100vh]">
        <SingleAchivement award="Gold" category="Maths" competition="FISO 2022" colorName="text-[#ebc034]" />
        <SingleAchivement award="Silver" category="Algorithms" competition="Stanford 2023" colorName="text-[#a2a9b3]" />
        <SingleAchivement award="Gold" category="Maths" competition="Harvard 2022" colorName="text-[#ebc034]" />
      </div>
    </section>
  );
}

export default Achivements;

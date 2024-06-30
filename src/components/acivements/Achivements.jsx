import SingleAchivement from "./SingleAchivement";

function Achivements() {
  return (
    <section id="achivements-tab" className="min:h-[100vh] w-full flex items-center justify-center md:left-4">
      <div className="flex md:flex-row flex-col md:gap-0 gap-10">
        <SingleAchivement award="Gold" category="Maths" competition="FISO 2022" colorName="text-[#ebc034]" />
        <SingleAchivement award="Silver" category="Algorithms" competition="Stanford 2023" colorName="text-[#a2a9b3]" />
        <SingleAchivement award="Gold" category="Maths" competition="Harvard 2022" colorName="text-[#ebc034]" />
      </div>
    </section>
  );
}

export default Achivements;

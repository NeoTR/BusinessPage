import React from "react";
import VapePng from "../../assets/vape.png";

const Home = () => {
  return (
    <section className="pt-0">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="text-white w-full md:basis-1/2">
            <h1 className="text-4xl font-bold">We sell the best ultimate vapes for the best prices!</h1>
            <p className="mt-8 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh mauris, consequat quis congue vehicula, ultrices nec metus. Etiam blandit a sem at venenatis. Ut euismod augue et dignissim fermentum.</p>
          </div>
          <div className="w-full md:basis-1/2">
            <img src={VapePng} alt="Vape" className="w-[150%] h-[150%] mt-6 md:ml-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

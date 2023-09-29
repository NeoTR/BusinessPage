import React from "react";
import VapePng from "../../assets/vape1.png";

const Home = () => {
  return (
    <section id="home" className="pt-[200px]">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row relative">
          <div className="text-white w-screen md:basis-1/2">
            <h1 className="text-4xl font-bold">We sell the best ultimate vapes for the best prices!</h1>
            <p className="mt-8 text-gray-200">We sell the cheapest and most reliable vapes in this industry, we use the best chemical combination to keep it healthy and tasteful! To purchase you must be atleast 18 years old! Enjoy our product and we hope you will be back!</p>
          </div>
          <div className="z-10 w-screen mt-12 md:basis-1/2 relative">
            <img src={VapePng} alt="Vape" className="w-[75%] z-10 mt-6 md:ml-20" />
            <div className="absolute z-[-1] w-40 h-40 gradient md:left-[17rem] bottom-[6rem] right-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

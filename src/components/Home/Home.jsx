import React from "react";
import image from "../../assets/image.png";

const Home = () => {
  return (
    <section id="home" className="pt-[200px]">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row relative">
          <div className="text-white w-screen md:basis-1/2">
            <h1 className="text-4xl font-bold">We sell the most delicious pizzas for the best prices!</h1>
            <p className="mt-8 text-gray-200">We offer the tastiest and most affordable pizzas in town, using only the freshest ingredients and traditional baking methods! To enjoy our delicious pizzas, just place an order! We hope you'll love our pizzas as much as we do!</p>
          </div>
          <div className="z-10 w-screen mt-12 md:basis-1/2 relative">
            <img src={image} alt="Pizza" className="w-[75%] z-10 mt-6 md:ml-20" />
            <div className="absolute z-[-1] w-40 h-40 gradient md:left-[17rem] bottom-[6rem] right-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Lorem, ipsum dolor sit amet consectetur
        </h1>
        <p className=" text-backgroundColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quis et qui, maxime assumenda repellat corrupti officia dolorum
          delectus labore deleniti?
        </p>
        <div className=" lg:pl-44">
          <div className=" flex justify-center lg:justify-start">
            <Button title="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

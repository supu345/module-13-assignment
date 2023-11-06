import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
const Home = () => {
  let myHeadLine = useRef();
  const [number, setNumber] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const change = () => {
    myHeadLine.current.innerText = "About Detail Page";
  };
  return (
    <>
      <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/images/hero.jpg')] bg-cover bg-no-repeat ">
        <div className=" w-full lg:w-2/3 space-y-5">
          <h1 className=" text-backgroundColor font-semibold text-4xl mt-20">
            React App Using Vite
          </h1>
          {/*useState */}
          <div>
            <h1 ref={myHeadLine} className=" text-xl font-semibold">
              Number: {number}
            </h1>
            <button
              onClick={() => setNumber(number + 1)}
              className="px-8 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
            >
              Number
            </button>

            <p className=" text-backgroundColor mt-6 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et
              qui, maxime assumenda repellat corrupti officia dolorum delectus
              labore deleniti? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quis et qui, maxime assumenda repellat corrupti
              officia dolorum delectus labore deleniti?
            </p>
            {/*useEffect */}
            <div>
              <h1 className="text-2xl font-semibold text-green-900">
                UseEffect Method
              </h1>

              <div className="pt-3">{JSON.stringify(data.title)}</div>
              <div className="pt-3">{JSON.stringify(data.description)}</div>
            </div>
            <div className=" lg:pl-44">
              <div className=" flex justify-center lg:justify-start mt-5">
                <Button title="Learn More" />
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-20 p-3 ">
          <h1
            ref={myHeadLine}
            className=" text-2xl font-semibold text-blue-700 pb-3"
          >
            Click the button
          </h1>
          <button
            onClick={change}
            className=" ml-4 px-8 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
          >
            Click
          </button>
        </div>
      </div>
      <Features />
      <Testimonials />
    </>
  );
};

export default Home;

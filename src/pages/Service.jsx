import React, { useEffect, useRef, useState } from "react";
import img from "../assets/images/service1.jpg";
import Button from "../components/Button";
import Heading from "../components/Heading";

const Service = () => {
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
    <div className="min-h-screen justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" size={50} />

      <div className="space-y-4 lg:pt-14">
        <div className=" font-semibold text-4xl text-yellow-700  lg:justify-center items-center pt-10">
          <Heading title1="Service" />
        </div>

        <div>
          <h1 ref={myHeadLine} className=" text-2xl font-semibold">
            Number: {number}
          </h1>
          <button
            onClick={() => setNumber(number + 1)}
            className="px-8 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
          >
            Number
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-green-900">
              UseState Method
            </h1>
            <div className="pt-3">{JSON.stringify(data.title)}</div>
            <div className="pt-3">{JSON.stringify(data.description)}</div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
          molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
          laboriosam temporibus delectus, aut a? Quasi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
          veritatis facere. Magnam!
        </p>
        <div className=" flex justify-center lg:justify-start">
          <div className=" flex justify-center lg:justify-start">
            <Button title="Service" />
          </div>
        </div>
        <h1 ref={myHeadLine} className=" text-4xl font-semibold text-blue-700 ">
          Click the button
        </h1>
        <button
          onClick={change}
          className="px-8 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Service;

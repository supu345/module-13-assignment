import React, { useEffect, useRef, useState } from "react";
import img from "../assets/images/contact.jpg";
import Button from "../components/Button";
import Heading from "../components/Heading";

const Contact = () => {
  let firstName,
    lastName,
    number = useRef();

  const [number1, setNumber1] = useState(1);
  const [data, setData] = useState([]);

  const changeInput = () => {
    let fName = firstName.value;
    let lName = lastName.value;
    let pName = number.value;

    alert(fName + " " + lName + " " + pName);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div className="min-h-screen justify-center items-center lg:px-32 px-5 pt-10">
        <div className=" font-semibold text-4xl text-yellow-700  lg:justify-center items-center pt-10">
          <Heading title1="Contact" title2="Us? " />
        </div>

        <div className=" flex flex-col md:flex-row justify-between w-full">
          <form className=" w-full md:w-2/5 space-y-5 pt-20">
            <div className=" flex flex-col">
              <label htmlFor="userName">Your Name</label>
              <input
                ref={(a) => (firstName = a)}
                className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="userName"
                id="userName"
                placeholder="enter your name"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="userEmail">Your Email</label>
              <input
                ref={(b) => (lastName = b)}
                className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="enter your email"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="userNumber">Your Number</label>
              <input
                ref={(c) => (number = c)}
                className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                type="text"
                name="userNumber"
                id="userNumber"
                placeholder="enter your number"
              />
            </div>

            <div className=" flex flex-row justify-center">
              <div className=" flex justify-center lg:justify-start">
                <button
                  onClick={changeInput}
                  className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-blue-700 brightColor hover:text-white transition-all rounded-full"
                >
                  Click
                </button>
              </div>
            </div>
          </form>

          <div className=" w-full md:w-2/4">
            <img src={img} alt="img" />
            <Button
              title="Contact us"
              className=" flex justify-center lg:justify-center"
            />

            {/*useEffect */}
            <div>
              <h1 className="text-2xl font-semibold text-green-900">
                UseEffect Method
              </h1>

              <div className="pt-3">{JSON.stringify(data.title)}</div>
              <div className="pt-3">{JSON.stringify(data.description)}</div>
            </div>
          </div>
        </div>
      </div>
      {/*useState */}
      <div className="ml-10 ">
        <h1 className=" text-2xl font-semibold pb-3">Number: {number1}</h1>
        <button
          onClick={() => setNumber1(number1 + 1)}
          className="px-8 py-1  border-2 border-brightColor text-brightColor hover:bg-blue-700  brightColor hover:text-white transition-all rounded-full"
        >
          Number
        </button>
      </div>
    </>
  );
};

export default Contact;

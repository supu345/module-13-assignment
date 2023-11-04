import React from "react";
import img from "../assets/images/project.jpg";
import Button from "../components/Button";
import Heading from "../components/Heading";

const Project = () => {
  return (
    <div className="min-h-screen justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" size={50} />

      <div className="space-y-4 lg:pt-14">
        <div className=" font-semibold text-4xl text-purple-700  lg:justify-center items-center pt-10">
          <Heading title1="Project" />
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
            <Button title="Project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

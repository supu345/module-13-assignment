import React from "react";
import img from "../assets/images/blog.jpg";

const Blog = () => {
  return (
    <div className="min-h-screen justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" size={50} />

      <div className="space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-blue-700  lg:justify-center">
          About blog
        </h1>
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
          <button className="bg-blue-700 text-white p-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

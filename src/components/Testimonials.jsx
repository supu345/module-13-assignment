import React from "react";
import image1 from "../assets/images/img2.png";
import image2 from "../assets/images/img1.jpeg";
import image3 from "../assets/images/img3.png";

const Testimonials = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center lg:px-32  bg-backgroundColor">
        <h5 className=" text-heading_color">Testimonials</h5>
        <h1 className="text-2xl w-96 mx-auto font-bold mb-5">
          Read What Others Have to Say
        </h1>
      </div>
      <div className="flex max-w-5xl mx-auto gap-8 group">
        <div className="bg-gray-200 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 !important cursor-pointer p-8 pt-0 rounded-xl mix-blend-luminosity">
          <img
            src={image2}
            alt="image1"
            className="h-20 mx-auto  rounded-full"
          />
          <h4 className="uppercase text-xl font-bold">Marry Queen</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            nostrum illum quia eos voluptas tempora optio explicabo natus
          </p>
          <button className="bg-btn_primary py-2.5 px-8 rounded-full">
            Get in Touch
          </button>
        </div>
        <div className="bg-gray-200 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 !important cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img src={image1} alt="image1" className="h-20 mx-auto " />
          <h4 className="uppercase text-xl font-bold">Dina Paul</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            nostrum illum quia eos voluptas tempora optio explicabo natus
          </p>
          <button className="bg-btn_primary py-2.5 px-8 rounded-full">
            Get in Touch
          </button>
        </div>
        <div className="bg-gray-200 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 !important cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img src={image3} alt="image1" className="h-20 mx-auto " />
          <h4 className="uppercase text-xl font-bold">John Doe</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            nostrum illum quia eos voluptas tempora optio explicabo natus
          </p>
          <button className="bg-btn_primary py-2.5 px-8 rounded-full">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

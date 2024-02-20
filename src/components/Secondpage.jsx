import React from "react";
import download1 from "../download1.webp";
import Cards from "./Cards";
import { Data } from "./Data";
import Footer from "./Footer";
import { Slider } from "./Slider";
const SecondPage = () => {
  return (
    <div>
      <div className="flex mt-16 justify-between">
        <div className="pl-10 w-[40%]">
          <p className="text-5xl">GATE</p>
          <p>
            The Graduate Aptitude Test in Engineering (GATE) is an examination
            that primarily tests the comprehensive understanding of various
            undergraduate subjects in engineering and science for admission into
            the Masters Program and Recruitment by some Public Sector Companies.
            GATE Examination is conducted jointly by the seven Indian Institutes
            of Technology at Mumbai, Delhi, Guwahati, Kanpur, Kharagpur,
            Chennai, Roorkee & Indian Institute of Science at Bengaluru on
            behalf of the National Coordination Board – GATE, The Department of
            Higher Education, Ministry of Education (MoE), Government of India.
          </p>
        </div>
        <div>
          <img src={download1} className="w-[720px]  pr-10"></img>
        </div>
      </div>
      <div className="pt-12">
        <p className="text-center font-bold text-5xl mb-14">BRANCHES</p>
        <div className="flex  justify-evenly">
          {Data.map((item) => {
            return <Cards key={item.id} title={item.title}></Cards>;
          })}
        </div>
      </div>
      <div className="mt-14">
        <p className="text-center font-bold text-5xl mb-14">Top Voices</p>
      </div>
          {/* <CarouselDefault></CarouselDefault> */}
      <div className="flex justify-center items-center mb-14">
          <Slider></Slider>
        
      </div>
    </div>
  );
};

export default SecondPage;

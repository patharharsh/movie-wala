"use client";
import makeInternalApiRequest from "@/utils/makeInternalApiRequest";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

const HeroSection = () => {
  const [carouselData, setCarouselData] = useState<any>([]);

  const fetchCarouselData = async () => {
    const data = await makeInternalApiRequest("GET", "/api/hero-section");
    setCarouselData(data?.result);
  };

  useEffect(() => {
    fetchCarouselData();
  }, []);

  return (
    <div>
      <Carousel
        activeIndicatorIconButtonProps={{
          style: {
              color: '#4ECCA3' 
          }
      }}
      autoPlay={false}
      >
        {carouselData &&
          carouselData?.map((item: any) => {
            return (
              <div
                key={item?.id}
                className={`md:h-[50vh] flex items-end md:overflow-hidden rounded-lg`}
              >
                <div className="relative h-full">
                  <Image
                    className="md:absolute relative top-[-10%] left-0 w-full"
                    src={item?.backdrop_path}
                    alt={item?.title}
                    width={1000}
                    height={100}
                  />
                  <div className="md:h-full  bg-gradient-to-t from-darkBackground  to-transparent z-[1111] flex relative px-11 items-end">
                    <div className="md:w-2/3">
                      <h1 className="md:text-5xl text-xl h-14 overflow-hidden md:overflow-auto md:mb-5 my-3 text-[#4ECCA3]">{item?.title}</h1>
                      <p className="md:text-xl text-md mb-5 "> <span className="h-[100px] block overflow-hidden">{item?.overview}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default HeroSection;

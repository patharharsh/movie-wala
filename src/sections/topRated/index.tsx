"use client";
import Text3d from "@/components/3DText/3DText";
import SectionTitle from "@/components/sectionTitle/sectionTitle";
import makeInternalApiRequest from "@/utils/makeInternalApiRequest";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  const fetchData = async () => {
    const data = await makeInternalApiRequest("GET", "/api/top-rated");
    setTopRated(data?.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SectionTitle>Top Rated</SectionTitle>
      <div
        className="overflow-x-auto overflow-y-hidden my-5 py-5 flex"
      >
        {topRated?.map((i: any, index) => (
          <div key={index} className="md:w-[320px] w-[150px] relative">
            <Text3d className="absolute md:bottom-[-33px] bottom-[-11px] text-[40px] md:text-[100px] left-0 md:left-[-10px]">{index + 1}</Text3d>
            <div
              className="md:w-[270px] w-[120px] inline-block bg-white mx-4 shadow-mw rounded-2xl overflow-hidden"   
            >
              <Image
                src={i?.poster_path}
                alt={i?.title}
                width={1000}
                height={100}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;

"use client";
import Text3d from "@/components/3DText/3DText";
import SectionTitle from "@/components/sectionTitle/sectionTitle";
import makeInternalApiRequest from "@/utils/makeInternalApiRequest";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import Image from "next/image";
import Link from "next/link";
import React, { WheelEvent, useEffect, useRef, useState } from "react";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault(); 
    if (scrollRef.current) {
      const scrollAmount = e.deltaY;
      const currentScrollLeft = scrollRef.current.scrollLeft;
      scrollRef.current.scrollTo({
        left: currentScrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
        className="overflow-x-auto overflow-y-hidden my-5 py-5 overscroll-none	 flex no-scrollbar"
        ref={scrollRef}
        onWheel={handleWheel}
      >
        {topRated?.map((i: any, index) => (
          <div key={index} className="md:w-[320px] w-[150px] relative">
            <Text3d className="absolute md:bottom-[-33px] bottom-[-11px] text-[40px] md:text-[100px] left-0 md:left-[-10px]">{index + 1}</Text3d>
            <Link
            href={`/movie/${i?.id}`}
              className="md:w-[270px] w-[120px] inline-block bg-white mx-4 shadow-mw rounded-2xl overflow-hidden"   
            >
              <Image
                src={i?.poster_path}
                alt={i?.title}
                width={1000}
                height={100}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;

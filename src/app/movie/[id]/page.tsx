"use client";
import SectionTitle from "@/components/sectionTitle/sectionTitle";
import makeTMDBApiRequest from "@/utils/makeTMDMApiRequest";
import { log } from "console";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaRankingStar } from "react-icons/fa6";

const DetailPage = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<any>();
  const [reviews, setReviews] = useState<any>();
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: any) => {
    e.preventDefault();
    if (scrollRef.current) {
      const scrollAmount = e.deltaY;
      const currentScrollLeft = scrollRef.current.scrollLeft;
      scrollRef.current.scrollTo({
        left: currentScrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const fetchData = async () => {
    const detail = await makeTMDBApiRequest(
      "GET",
      `https://api.themoviedb.org/3/movie/${params?.id}`
    );

    const reviewData = await makeTMDBApiRequest(
      "GET",
      `https://api.themoviedb.org/3/movie/${params?.id}/reviews`
    );
    setData(detail);
    setReviews(reviewData?.results);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  console.log(reviews);
  return (
    <div className="">
      <div
        className={`min-h-[80vh] bg-gradient-to-t via-darkBackground from-darkBackground  to-transparent`}
      >
        <div className="w-full h-[75vh] overflow-hidden absolute top-0 left-0 -z-10">
          <Image
            width={1920}
            height={100}
            alt="backdrop"
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
          />
        </div>
        <div className="container mx-auto pt-[10vh]">
          <div className="flex items-end gap-8">
            <div className="w-1/4 rounded-xl overflow-hidden">
              <Image
                width={1000}
                height={1000}
                alt="backdrop"
                src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              />
            </div>
            <div className="w-3/4">
              <h1 className="md:text-5xl text-xl font-extrabold ">
                {data?.title}
              </h1>
              <h3 className="md:text-2xl text-lg md:mb-2  ">{data?.tagline}</h3>
              <p className="md:text-lg text-md mb-5 ">{data?.overview}</p>
              <div className="flex gap-2 my-4">
                {data?.genres?.map((genre: any) => (
                  <span key={genre?.id} className="text-xs border border-[#4ECCA3] rounded-full bg-[#4ecca260] py-1 px-2">
                    {genre?.name}
                  </span>
                ))}

                <span className="font-bold ml-4 flex items-center gap-2">
                  <FaRankingStar /> {data?.vote_average}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 px-5">
          <SectionTitle> Top Reviews </SectionTitle>
          <div
            className="overflow-x-auto overflow-y-hidden gap-3 overscroll-none flex no-scrollbar"
            style={{ display: "-webkit-box" }}
            ref={scrollRef}
            onWheel={handleWheel}
          >
            {reviews?.map((review: any) => (
              <div key={review?.id} className=" md:w-[320px] w-[250px] ">
                <div className="w-[100px] h-[100px] overflow-hidden rounded-full mx-auto mb-[-50px]">
                  <Image
                    width={100}
                    height={500}
                    alt={review?.author}
                    src={
                      review?.author_details?.avatar_path
                        ? `https://image.tmdb.org/t/p/original${review?.author_details?.avatar_path}`
                        : `/no-avtar.png`
                    }
                  />
                </div>
                <div className="bg-[#0a12218a] pt-[50px] text-center rounded-md pb-4">
                  <h1>{review?.author}</h1>
                  <div
                    className="line-clamp-3 px-4 min-h-[72px]"
                    dangerouslySetInnerHTML={{ __html: review?.content }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

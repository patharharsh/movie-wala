"use client";
import makeTMDBApiRequest from "@/utils/makeTMDMApiRequest";
import React, { useEffect, useState } from "react";

const DetailPage = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    const detail = await makeTMDBApiRequest(
      "GET",
      `https://api.themoviedb.org/3/movie/${params?.id}`
    );
    setData(detail);
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  return (
    <div>
        <div>
          <h1>{data?.title}</h1>
        </div>
    </div>
  );
};

export default DetailPage;

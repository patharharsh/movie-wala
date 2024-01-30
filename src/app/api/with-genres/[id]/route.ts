import makeTMDBApiRequest from "@/utils/makeTMDMApiRequest";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const {id} = params;

  const data = await makeTMDBApiRequest(
    "GET",
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`
  );

  const result = data?.results.map((item: any) => {
    return {
      title: item?.title,
      backdrop_path: `https://image.tmdb.org/t/p/original${item?.backdrop_path}`,
      poster_path: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
      overview: item?.overview,
      id: item?.id,
    };
  });

  return NextResponse.json({ result });
}

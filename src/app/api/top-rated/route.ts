import makeTMDBApiRequest from "@/utils/makeTMDMApiRequest";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await makeTMDBApiRequest("GET", "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
    const result = data?.results?.slice(0,10).map((item:any) => {
        return{
            title: item?.title,
            backdrop_path: `https://image.tmdb.org/t/p/original${item?.backdrop_path}`,
            poster_path: `https://image.tmdb.org/t/p/original${item?.poster_path}`,
            id: item?.id
        }
    })
    return NextResponse.json({result})
}
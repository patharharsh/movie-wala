import makeTMDBApiRequest from "@/utils/makeTMDMApiRequest";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await makeTMDBApiRequest("GET", "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1")

    const result = data?.results.map((item:any) => {
        return{
            title: item?.title,
            backdrop_path: `https://image.tmdb.org/t/p/original${item?.backdrop_path}`,
            overview: item?.overview,
            id: item?.id
        }
    })
    
    return NextResponse.json({result})
}
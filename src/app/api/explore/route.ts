import makeTMDBApiRequest from "@/utils/makeTMDMApiRequest";
import { NextResponse } from "next/server";

export async function GET() {
    const {genres} = await makeTMDBApiRequest("GET", "https://api.themoviedb.org/3/genre/movie/list?language=en")
    
    const result = {
        tabs : genres
    }
    
    return NextResponse.json({result})
}
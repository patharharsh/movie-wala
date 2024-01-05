import axios from "axios";

const makeTMDBApiRequest = async (method: string, url: string, payload?:any) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: payload,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjliNWYxMGNkNTRjZmI5NzRkNzFmMWU3YTYxMGRiYyIsInN1YiI6IjY1OGM0NDVkMzAzYzg1MDcxOGE1NDliNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DQtK2Xvu_8_s3Mn8i-ztIs6lP8-Ewyp0xQEes3oYEM'
      }
    });
    console.log(data);
    
    return data;
  } catch (error) {
    console.log("TMDB error : ", error);
  }
};

export default makeTMDBApiRequest;
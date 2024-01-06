import axios from "axios";

const makeInternalApiRequest = async (method: string, url:string, payload?: any) => {
  try {
    const { data } = await axios({
      method,
      url,
      data: payload
    });
    return data;
  } catch (error) {
    console.log("INternal Axios error : ", error);
  }
};

export default makeInternalApiRequest;
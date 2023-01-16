import { API } from "../backend";
import axios from "axios";

export const getData = async() => {
   
  return await axios.get(`${API}/getcompanydata?name=reliance`)
    .then((response) => {
    //   console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

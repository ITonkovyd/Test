import axios from "axios";
import { Notify } from "notiflix";
const URL = "http://localhost:3000/api";

const authUser = async (credentials) => {
  try {
    const { data } = await axios.post(URL + "/login", credentials);

    return data;
  } catch (error) {
    console.log(error.message);
    Notify.failure(error.message);
  }
};

export default authUser;

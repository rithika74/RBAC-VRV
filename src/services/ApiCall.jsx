import axios from "axios";
import { BaseUrl } from "./BaseUrls";

export const ApiCall = async (method, endPoint, data, params, is_formdata) => {
  var headers = {
    "Content-Type": is_formdata ? "multipart/form-data" : "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
    platform: "web",
  };
  var url = BaseUrl + endPoint;

  try {
    const res = await axios({
      method,
      url,
      params,
      data,
      headers,
    });
    var response = { status: true, message: res.data };

    return response;
  } catch (error) {
    return error;
  }
};

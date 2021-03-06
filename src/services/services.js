/* eslint-disable import/first */
/* eslint-disable eqeqeq */
import { authHeader } from "../helpers";
import { API_URL } from "../config.js";


export const services = {
  
  getSampleList,
  
};

function getSampleList() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(API_URL+"users", requestOptions).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    const status = data.status;
    const code = data.code;


    if(code == 202){
        window.location.reload();
    }
   
    if (status === "error") {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    if (!response.ok) {
      if (response.status === 500) {
        let error = "Operation Not Successful";
        return Promise.reject(error);
      }
      if(response.status === 202){
        window.location.reload();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

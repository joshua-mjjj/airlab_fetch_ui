import axios from "axios";


import {

LOADING,
SERVICE_REQUEST
  
} from "./types";


export const fetch_service = (projectId, xmlFormId, filename) => (dispatch) => {
  
  dispatch({ type: LOADING });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
     projectId,
     xmlFormId,
     filename
  });

  console.log(body)

  axios
    .post(`${process.env.REACT_APP_API_URL}request_service/`, body, config)
    .then((res) => {
      console.log("Submitting request...");
      console.log(res.data);
      dispatch({
        type: SERVICE_REQUEST,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err) {
          console.log(err);
      }
    });
};

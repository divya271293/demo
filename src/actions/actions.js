/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import { constants } from "../constants";
import { services } from "../services";
import { history } from "../helpers";
import { message } from "antd";


export const actions = {

  getSampleList,

};

function getSampleList() {
  return (dispatch) => {
    dispatch(request());

    services.getSampleList().then(
      (samplelist) => dispatch(success(samplelist)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: constants.GET_LIST_REQUEST };
  }
  function success(samplelist) {
    return { type: constants.GET_LIST_SUCCESS, samplelist };
  }
  function failure(error) {
    return { type: constants.GET_LIST_FAILURE, error };
  }
}

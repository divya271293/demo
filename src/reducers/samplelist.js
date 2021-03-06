import { constants } from "../constants";

/* status field is used for identify the request in which status request or succes or failure*/
export function samplelist(state = {}, action) {
  switch (action.type) {
    //Get plants list
    case constants.GET_LIST_REQUEST:
      return {
        prodloading: true,
        no_data: ""
      };
    case constants.GET_LIST_SUCCESS:
      return {
        items: action.samplelist,
        prodloading: false
      };
    case constants.GET_LIST_FAILURE:
      return {
        error: action.error,
        no_data: "No Data available"
      };

   
    default:
      return state;
  }
}

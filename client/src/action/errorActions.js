import { GET_ERROR, CLEAR_ERRORS } from "./types";

//return errors
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERROR,
    payload: { msg, status, id }
  };
};

//clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

import { SUBMIT_CREDENTIALS } from "../actions/types";

const initialState = {
  credentials:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_CREDENTIALS:
      return {
          ...state,
          credentials:action.payload
      }
    default:
      return state;
  }
}

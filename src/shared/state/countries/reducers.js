import { SET_COUNTRIES } from "./action-types";
import initialState from "./initial-state";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES: {
      const { countries } = action.payload;
      return {
        ...state,
        list: countries
      };
    }
    default:
      return state;
  }
};

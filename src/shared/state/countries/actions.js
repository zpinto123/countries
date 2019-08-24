import { SET_COUNTRIES } from "./action-types";
import { countriesApi } from "../../../services";

export const getCountries = () => async dispatch =>
  countriesApi.getCountries().then(({ data: { countries } }) => {
    dispatch({
      type: SET_COUNTRIES,
      payload: { countries }
    });
  });

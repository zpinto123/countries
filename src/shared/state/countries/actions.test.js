import { store } from "../../utils/tests-utils";
import { countries as countriesMock } from "../../mocks";

const setCountries = countries => ({
  type: "SET_COUNTRIES",
  payload: { countries }
});

describe("action creators", () => {
  it("Saves countries to redux if getCountries is successful", () => {
    store.dispatch(setCountries(countriesMock));
    expect(store.getActions()).toMatchSnapshot();
  });
});

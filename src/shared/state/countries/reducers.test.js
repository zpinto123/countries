import reducer from "./reducers";
import initialState from "./initial-state";
import { countries } from "../../mocks";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_COUNTRIES", () => {
    expect(
      reducer(initialState, {
        type: "SET_COUNTRIES",
        payload: { countries }
      })
    ).toEqual({ list: [...countries] });
  });
});

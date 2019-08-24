import configureStore from "redux-mock-store";
import countries from "../state/countries/initial-state";

const mockStore = configureStore();
const store = mockStore({ countries });

export { store };

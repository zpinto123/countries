import App from "./App";
import { localizationUtils } from "../../shared/utils";
import resources from "./locales";

const { withLocalization } = localizationUtils;

export default withLocalization(App, resources, "App");

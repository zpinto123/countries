import CountriesItem from "./CountriesItem";
import { localizationUtils } from "../../../../shared/utils";
import resources from "./locales";

const { withLocalization } = localizationUtils;

export default withLocalization(CountriesItem, resources, "CountriesItem");

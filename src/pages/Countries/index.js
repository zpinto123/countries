import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Countries from "./Countries";
import { getCountries } from "../../shared/state/countries/actions";
import { localizationUtils } from "../../shared/utils";
import resources from "./locales";

const { withLocalization } = localizationUtils;

const mapStateToProps = state => ({
  countries: state.countries.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCountries
    },
    dispatch
  );
export const CountriesComponent = withLocalization(
  Countries,
  resources,
  "Countries"
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesComponent);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { country } from "../../shared/models";
import { styleUtils } from "../../shared/utils";
import { CountriesItem } from "./components";
import { List } from "../../shared/components";
import styles from "./styles";

const { style } = styleUtils;
const Title = style("h1");
const Container = style("div", styles.container);
const CountryContainer = style("div");
const ListOfCountries = style(List);
const NoCountry = style("div");

class Countries extends Component {
  componentDidMount() {
    const { getCountries, countries } = this.props;
    if (!countries.length) getCountries();
  }

  handleCountryClick = ({ code }) => () => {
    const { history } = this.props;
    history.push({
      pathname: `/countries/${code}`
    });
  };

  renderCountryItems = countryDetails => country => {
    const {
      t,
      match: {
        params: { code }
      }
    } = this.props;
    return country ? (
      <CountryContainer
        onClick={!countryDetails && this.handleCountryClick(country)}
      >
        <CountriesItem
          key={country.name}
          {...country}
          countryDetails={countryDetails}
        />
      </CountryContainer>
    ) : (
      <NoCountry key="noCountry">{`${t("noCountryFound")} ${code}`}</NoCountry>
    );
  };

  render() {
    const { t, countries, match } = this.props;
    let items =
      match.params.code && countries.length
        ? [countries.find(({ code }) => code === match.params.code)]
        : countries;
    const countryDetails = match.params.code && items.length === 1;
    return (
      <Container>
        <Title>{t("title")}</Title>
        <ListOfCountries
          items={items}
          renderItems={this.renderCountryItems(countryDetails)}
        />
      </Container>
    );
  }
}

Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape(country))
};

export default Countries;

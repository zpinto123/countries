import React, { PureComponent } from "react";
import { country } from "../../../../shared/models";
import { styleUtils } from "../../../../shared/utils";
import styles from "./styles";

const { style } = styleUtils;

const Container = style("div", styles.container);
const ValueContainer = style("div", styles.valueContainer);
const Label = style("span", styles.label);
const Value = style("span");

class CountriesItem extends PureComponent {
  render() {
    const {
      t,
      name,
      currency,
      phone,
      continent: { name: continentName },
      languages,
      countryDetails
    } = this.props;
    return (
      <Container countryDetails={countryDetails}>
        <ValueContainer>
          <Label>{t("country")}</Label>
          <Value>{name}</Value>
        </ValueContainer>
        <ValueContainer>
          <Label>{t("continent")}</Label>
          <Value>{continentName}</Value>
        </ValueContainer>
        <ValueContainer>
          <Label>{t("languages")}</Label>
          {languages.map(
            ({ name, native }) =>
              name && <Value key={name}>{`${name} (${native})`}</Value>
          )}
        </ValueContainer>
        {countryDetails && (
          <>
            <ValueContainer>
              <Label>{t("code")}</Label>
              <Value>{phone}</Value>
            </ValueContainer>
            <ValueContainer>
              <Label>{t("currency")}</Label>
              <Value>{currency}</Value>
            </ValueContainer>
          </>
        )}
      </Container>
    );
  }
}

CountriesItem.propTypes = country;

export default CountriesItem;

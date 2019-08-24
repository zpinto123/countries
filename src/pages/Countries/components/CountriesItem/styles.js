import { css } from "styled-components";
import { tokens } from "../../../../shared/design";

const styles = {
  container: css`
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 5px;
    padding: 10px 0px 10px 0px;
    background-color: ${tokens.COLORS.WATER};
    border-radius: 5px;
    ${({ countryDetails }) => (!countryDetails ? `cursor: pointer;` : "")}
    &:hover {
      ${({ countryDetails }) => (!countryDetails ? `opacity: 0.75;` : "")}
    }
  `,
  valueContainer: css`
    width: 225px;
    display: flex;
    flex-direction: column;
  `,
  label: css`
    font-weight: bold;
  `
};

export default styles;

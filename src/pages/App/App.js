import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { styleUtils } from "../../shared/utils";
import styles from "./styles";

const { style } = styleUtils;

const Container = style("div", styles.container);

class App extends PureComponent {
  render() {
    const { t } = this.props;
    return (
      <Container>
        <Link to="/countries">
          <h3>{t("countries")}</h3>
        </Link>
      </Container>
    );
  }
}

export default App;

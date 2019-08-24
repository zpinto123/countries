import PropTypes from "prop-types";

const country = {
  name: PropTypes.string.isRequired,
  continent: PropTypes.shape({ name: PropTypes.string.isRequired }),
  currency: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      native: PropTypes.string
    })
  )
};

export default country;

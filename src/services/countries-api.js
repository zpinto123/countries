import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { apiUtils } from "../shared/utils";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com" // In a real app, this would be saved on an .env file
});

const getCountries = () =>
  apiUtils.makeQuery({
    client,
    query: gql`
      {
        countries {
          code
          name
          currency
          phone
          continent {
            name
          }
          languages {
            name
            native
          }
        }
      }
    `
  });

export default { getCountries };

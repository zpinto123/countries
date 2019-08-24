const makeQuery = ({ client, query }) =>
  client
    .query({ query })
    .then(verifyResponse)
    .catch(handleErrors);

const verifyResponse = res => {
  if (!res || !res.data) return null;
  return res;
};

const handleErrors = error => error;

export { makeQuery };

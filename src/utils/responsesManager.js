const responseError = (error) => {
  const data = {
    status: 'fail',
    code: error.code,
    message: error.message,
  };

  return data;
};
const responseSuccess = (response) => {
  const data = {
    status: 'success',
    resultsCount: response.results.length,
    data: response,
  };
  return data;
};

module.exports = {
  responseError,
  responseSuccess,
};

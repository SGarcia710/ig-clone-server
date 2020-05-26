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
    results: { ...response, count: response.data.length },
  };
  return data;
};

module.exports = {
  responseError,
  responseSuccess,
};

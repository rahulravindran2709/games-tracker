const axiosApi = store => next => action => {
  console.log(action.type, 'In axios api');
  return next(action);
}
export default axiosApi;

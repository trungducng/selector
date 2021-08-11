export const handleFormData = (reducerFunc, value, dispatch) => {
  if (value.trim()) {
    return dispatch(reducerFunc(value.trim()));
  } else {
    alert("Empty data!");
  }
};

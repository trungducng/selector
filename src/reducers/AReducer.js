const AReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_ITEM_A":
      return action.item;
    default:
      return state;
  }
};

export default AReducer;

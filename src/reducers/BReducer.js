const BReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_ITEM_B":
      return action.item;
    default:
      return state;
  }
};

export default BReducer;

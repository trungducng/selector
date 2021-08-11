import { createSelector } from "reselect";

const bData = createSelector(
  (state) => state.b,
  (item) => ({
    value: item,
    length: item.length
  })
);

export default bData;

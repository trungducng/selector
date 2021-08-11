import { createSelector } from "reselect";

const aData = createSelector(
  (state) => state.a,
  (item) => ({
    value: item,
    length: item.length
  })
);

export default aData;

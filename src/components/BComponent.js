import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { addItemB } from "../action";
import { handleFormData } from "../services/formData.impl.services";
import "./BComponent.scss";

const BComponent = (props) => {
  const dispatch = useDispatch();

  const aData = createSelector(
    (state) => state.a,
    (item) => ({
      value: item,
      length: item.length
    })
  );

  const BRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleFormData(addItemB, BRef.current.value, dispatch);
  };

  const aValue = useSelector(aData);

  return (
    <div className="formB">
      <form onSubmit={handleOnSubmit}>
        <label>Input B data</label>
        <input type="text" name="b" ref={BRef} />
        <button type="submit">Submit</button>
        <p className="value">A value: {aValue.value}</p>
        <p className="value">Length: {aValue.length}</p>
      </form>
    </div>
  );
};

export default BComponent;

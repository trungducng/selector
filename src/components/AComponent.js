import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { addItemA } from "../action";
import { handleFormData } from "../services/formData.impl.services";
import "./AComponent.scss";

const AComponent = (props) => {
  const dispatch = useDispatch();

  const bData = createSelector(
    (state) => state.b,
    (item) => ({
      value: item,
      length: item.length
    })
  );
  const ARef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleFormData(addItemA, ARef.current.value, dispatch);
  };

  const bValue = useSelector(bData);

  return (
    <div className="formA">
      <form onSubmit={handleOnSubmit}>
        <label>Input A data</label>
        <input type="text" name="a" ref={ARef} />
        <button type="submit">Submit</button>
        <p className="value">B value: {bValue.value}</p>
        <p className="value">Length: {bValue.length}</p>
      </form>
    </div>
  );
};

export default AComponent;

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import aData from "../selectors/ASelector";
import { addItemB } from "../action";
import { validateFormData } from "../services/formData.impl.services";
import "./BComponent.scss";

const BComponent = (props) => {
  const dispatch = useDispatch();

  const BRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = BRef.current.value;
    if (validateFormData(formData)) {
      dispatch(addItemB(formData));
    }
  };

  const aValue = useSelector(aData);

  return (
    <div className="BComponent__form">
      <form onSubmit={handleOnSubmit}>
        <label>Input B data</label>
        <input type="text" name="b" ref={BRef} />
        <button type="submit">Submit</button>
        <p className="BComponent__p">B value: {aValue.value}</p>
        <p className="BComponent__p">Length: {aValue.length}</p>
      </form>
    </div>
  );
};

export default BComponent;

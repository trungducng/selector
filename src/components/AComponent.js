import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemA } from "../action";
import { validateFormData } from "../services/formData.impl.services";
import bData from "../selectors/BSelector";
import "./AComponent.scss";

const AComponent = (props) => {
  const dispatch = useDispatch();
  const ARef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = ARef.current.value;
    if (validateFormData(formData)) {
      dispatch(addItemA(formData));
    }
  };

  const bValue = useSelector(bData);

  return (
    <div className="AComponent__form">
      <form onSubmit={handleOnSubmit}>
        <label>Input A data</label>
        <input type="text" name="a" ref={ARef} />
        <button type="submit">Submit</button>
        <p className="AComponent__p">B value: {bValue.value}</p>
        <p className="AComponent__p">Length: {bValue.length}</p>
      </form>
    </div>
  );
};

export default AComponent;

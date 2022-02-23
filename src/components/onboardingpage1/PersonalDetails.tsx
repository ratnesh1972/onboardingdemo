import React, { useState, useContext } from "react";
import ProgressContext from "../../context/ProgressContext";

const PersonalDetails = () => {
  const context = useContext(ProgressContext);

  const [name, setname] = useState({
    value: "",
    error: "",
    isValidated: false,
  });

  const [display, setdisplay] = useState({
    value: "",
    error: "",
    isValidated: false,
  });

  //Function to validate name - After changing state, returning true or false as state update takes time and might give different results in handleSubmit.
  const validateName = () => {
    const value = name.value;
    const pattern = /^[A-Za-z\s]{1,}[A-Za-z\s]{0,}$/;
    if (value !== "") {
      if (pattern.test(value)) {
        //Change state to pass validation
        setname({ ...name, isValidated: true });
        //Return true as we are passing the validation.
        return true;
      } else {
        //Change state to fail validation and update error
        setname({
          ...name,
          error: "Please enter valid name!",
          isValidated: false,
        });
        //Return false as we are not passing the validation.
        return false;
      }
    } else {
      //Change state to fail validation and update error.
      setname({ ...name, error: "Name is required!", isValidated: false });
      //Return false as we are not passing the validation.
      return false;
    }
  };

  //Function to validate display.
  const validateDisplay = () => {
    const value = display.value;
    if (value !== "") {
      setdisplay({ ...display, isValidated: true });
      return true;
    } else {
      setdisplay({
        ...display,
        error: "Display name is required!",
        isValidated: false,
      });
      return false;
    }
  };

  const handleNameChange = (e: any) => {
    const value = e.target.value;
    setname({ ...name, value });
  };

  const handleDisplayChange = (e: any) => {
    const value = e.target.value;
    setdisplay({ ...display, value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const nameValidation = validateName();
    const displayValidation = validateDisplay();

    if (nameValidation && displayValidation) {
      const data = {
        name: name.value,
        display: display.value,
      };
      context.savePersonalDetails(data);
      context.incrementPage();
    }
  };

  return (
    <div className="box">
      <form className="form">
        <div className="form-group mb-20">
          <label>Full Name</label>
          <input
            type="email"
            name="name"
            placeholder="Steve Jobs"
            value={name.value}
            onChange={handleNameChange}
          />
          {!name.isValidated && (
            <label className="label-error">{name.error}</label>
          )}
        </div>
        <div className="form-group mb-20">
          <label>Display Name</label>
          <input
            type="text"
            name="dispaly"
            placeholder="Steve"
            value={display.value}
            onChange={handleDisplayChange}
          />
          {!display.isValidated && (
            <label className="label-error">{display.error}</label>
          )}
        </div>
        <button className="btn-primary" type="submit" onClick={handleSubmit}>
          Create Workspace
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;

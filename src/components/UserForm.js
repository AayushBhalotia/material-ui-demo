import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Confirm from "./Confirm";
import Success from "./Success";

function UserForm() {
  const [Step, setStep] = useState(1);
  const [User, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    course: "",
  });

  //proceed to next step
  const nextStep = () => {
    setStep(Step + 1);
  };
  //proceed to next step
  const prevStep = () => {
    setStep(Step - 1);
  };

  //Handle fields change
  const handleChange = (input) => (e) => {
    setUser({ ...User, [input]: e.target.value });
  };
 

  switch (Step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          User={User}
        />
      );

    case 2:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          User={User}
        />
      );

    case 3:
      return <Success />;
    default:
      <UserDetails />;
  }
}

export default UserForm;

import React, { useState } from "react";

const Register = (props) => {
  //instead of seeting hooks for each input field separately:
  // const [id, setId] = useState("");
  // const [fullName, setName] = useState("");
  //etc..

  //set one object to store the entries and one object to store the errors
  const [values, setValues] = useState({
    id: "",
    fullName: "",
    img: "",
    applicationDate: "",
    position: "",
    department: "",
    level: "",
    stage: "",
  });
  const [formErrors, setFormErrors] = useState({});
  let randomNumber = Math.floor(Math.random() * 101);
  //let randomNumberAsString = randomNumber.toString();
  console.log(randomNumber);
  const [newId, setNewId] = useState(randomNumber);

  const updateData = (e) => {
    if (e.target.name === "fullName") {
      e.persist();
      setValues({ ...values, fullName: e.target.value }); //use spread operator to track changed values
      //setValues({ [e.target.fullName]: e.target.value }); //or you can track changed values like this
      //FOR LATER: checkErrorsUsingOnChange("fullName", fullName);
    } else if (e.target.name === "img") {
      e.persist();
      setValues({ ...values, img: e.target.value });
      //setValues({ [e.target.name]: e.target.value });
      //checkErrorsUsingOnChange("img", img);
    } else if (e.target.name === "applicationDate") {
      e.persist();
      setValues({ ...values, applicationDate: e.target.value });
      //setValues({ [e.target.name]: e.target.value });
      //checkErrorsUsingOnChange("applicationDate", applicationDate);
    } else if (e.target.name === "position") {
      e.persist();
      setValues({ ...values, position: e.target.value });
      // setValues({ [e.target.name]: e.target.value });
      //checkErrorsUsingOnChange("position", position);
    } else if (e.target.name === "department") {
      e.persist();
      setValues({ ...values, department: e.target.value });
      // setValues({ [e.target.name]: e.target.value });
    } else if (e.target.name === "level") {
      e.persist();
      setValues({ ...values, level: e.target.value });
      //setValues({ [e.target.name]: e.target.value });
    } else if (e.target.name === "stage") {
      e.persist();
      setValues((values) => ({ ...values, stage: e.target.value }));
      // setValues((values) => ({ ...values, stage: e.target.value })); //this is how we would do it in the class-based component
      // setValues({ [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let validation = validate();

    if (validation === true) {
      //set newID by using declaread hook:
      setNewId(newId);
      //add your new applicant object to your array of data objects with spread operator and update its id:
      let newApplicant = { ...values, id: newId.toString() };
      /*Note 1: let newApplicant = { ...values, id: (props.users.length + 1).toString() };
      will eventually create problems, because when we delete and add new applicants, they will have same ids */
      /*Note 2: using concat won't work here as concat is an array method. It won't work on objects.*/

      // call your props for the updatedApplicants function in App.js:
      props.update(newApplicant);

      //console.log(newApplicant); //to test: type (object)
      // console.log({ ...values }); //to test
      // console.log("Values array" + { newApplicant }); //to test

      // Reset the state variables to default values so the form is ready to use again:
      alert("Your new applicant is registered.");
      setValues({
        id: "",
        fullName: "",
        img: "",
        applicationDate: "",
        position: "",
        department: "",
        level: "",
        stage: "",
      });
    }
  };

  //form validation handler:
  const validate = () => {
    // isValid variable will help you to use validate function as callback in your handleSubmit function
    let errors = {};
    let isValid = true;

    //your if else statements for each condition:

    if (!values.fullName) {
      errors.name = "Cannot be blank";
      isValid = false;
    } else if (values.fullName.length < 2) {
      errors.name = "Not a valid format";
      isValid = false;
    }

    if (!values.img) {
      errors.img = "Upload your picture";
      isValid = false;
    }

    if (!values.applicationDate) {
      errors.applicationDate = "Cannot be blank";
      isValid = false;
    }

    if (!values.position) {
      errors.position = "Cannot be blank";
      isValid = false;
    }

    if (!values.department) {
      errors.department = "Choose a department";
      isValid = false;
    }

    if (!values.level) {
      errors.level = "Choose level";
      isValid = false;
    }

    if (!values.stage) {
      errors.stage = "Choose stage";
      isValid = false;
    }

    //console.log(errors); //checker

    setFormErrors(errors);

    return isValid;
  };

  return (
    <form className="createApplicant" onSubmit={handleSubmit}>
      <h1>Create User</h1>
      <label>
        Full Name:
        <input
          name="fullName"
          value={values.fullName}
          onChange={updateData}
          //   onBlur={checkErrorsUsingOnBlur} //to add
        />
      </label>
      <span className="error">{formErrors.name}</span>
      <label>
        Upload your picture:
        <input
          name="img"
          value={values.img}
          onChange={updateData}
          //   onBlur={checkErrorsUsingOnBlur} //to add
        />
      </label>
      <span className="error">{formErrors.img}</span>
      <label>
        Application Date:
        <input
          type="date"
          name="applicationDate"
          value={values.applicationDate}
          onChange={updateData}
          //   onBlur={checkErrorsUsingOnBlur} //to add
        />
      </label>
      <span className="error">{formErrors.applicationDate}</span>
      <label>
        Position:
        <input
          name="position"
          value={values.position}
          onChange={updateData}
          //   onBlur={checkErrorsUsingOnBlur} //to add
        />
      </label>
      <span className="error">{formErrors.position}</span>
      <label>
        Department:
        {/* todo: make a map to fetch this list from data.js */}
        <select
          name="department"
          value={values.department}
          onChange={updateData}
          //   onBlur={checkErrorsUsingOnBlur} //to add
        >
          <option>--- Please select ---</option>
          <option>Online Marketing</option>
          <option>Sales</option>
          <option>IT & Engineering</option>
          <option>Administation</option>
          <option>Product Design</option>
        </select>
      </label>
      <span className="error">{formErrors.department}</span>
      <label>
        Level:
        {/* todo: make a map to fetch this list from data.js */}
        <select
          name="level"
          value={values.level}
          onChange={updateData}
          //   onBlur={checkErrorsUsingOnBlur} //to add
        >
          <option>--- Please select ---</option>
          <option>Junior</option>
          <option>Middle level</option>
          <option>Senior</option>
        </select>
      </label>
      <span className="error">{formErrors.level}</span>
      <label>
        Stage:
        {/* todo: make a map to fetch this list from data.js */}
        <select
          name="stage"
          value={values.stage}
          onChange={updateData}
          //   onBlur={checkErrorsUsingOnBlur} //to add
        >
          <option>--- Please select ---</option>
          <option>Application submitted</option>
          <option>Screening</option>
          <option>1st interview</option>
          <option>2nd interview</option>
          <option>Contract proposal</option>
          <option>Contract accepted</option>
          <option>Rejected</option>
        </select>
      </label>
      <span className="error">{formErrors.stage}</span>
      <button className="form-btn">Submit</button>
    </form>
  );
};

export default Register;

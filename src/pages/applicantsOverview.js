import React, { useState, useEffect } from "react";
import SearchBar from "../components/searchbar";
import Table from "../components/table";
import charachters from "../source/characters.png";

//component displayed on right side of root:
const UserTable = (props) => {
  //Set hooks for 'searchTerm' and array of 'searchResults'
  const [searchTerm, setSearchTerm] = useState({
    name: "",
    department: "",
    stage: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [display, setDisplay] = useState(false);

  // set count state variable to display total number of applicants:
  const [count, setCount] = useState(0);

  //#region OPTION 1: filter function for all three filters: WORKS OK
  // const filterItems = () => {
  //   let results = props.applicantsData.filter(
  //     (applicant) =>
  //       applicant.fullName.toLowerCase().includes(searchTerm.name) ||
  //       applicant.department.toLowerCase().includes(searchTerm.department) ||
  //       applicant.stage.toLowerCase().includes(searchTerm.stage)
  //   );
  //   setSearchResults(results);
  // };
  //#endregion

  //#region OPTION 2: three separate filters: WORKS OK

  // const filterItemsbyName = () => {
  //   let results = props.applicantsData.filter((applicant) =>
  //     applicant.fullName.toLowerCase().includes(searchTerm.name)
  //   );
  //   setSearchResults(results);
  // };

  // const filterItemsbyDepartment = () => {
  //   let results = props.applicantsData.filter((applicant) =>
  //     applicant.department.toLowerCase().includes(searchTerm.department)
  //   );
  //   setSearchResults(results);
  // };

  // const filterItemsbyStage = () => {
  //   let results = props.applicantsData.filter((applicant) =>
  //     applicant.stage.toLowerCase().includes(searchTerm.stage)
  //   );
  //   setSearchResults(results);
  // };
  //#endregion

  //Handle your input on change for three input fields:
  /*Note: This handleChange function should follow your filterItem function from above to work:*/
  const handleChange = (event) => {
    //IMPORTANT: searchTerm is an object, therefore we need to refer to it in event handler like this:
    setSearchTerm({ [event.target.name]: event.target.value });
    //filterItems(); //see Option 1
    // filterItemsbyName(); //see Option 2
    // filterItemsbyDepartment(); //see Option 2
    // filterItemsbyStage(); //see Option 2
  };

  //OPTION 3: or, useEffect to filter the data for all three input fields: WORKS OK
  //it filters the data based on the inputs entered in each previous input:
  useEffect(() => {
    let results = props.applicantsData.filter(
      (applicant) =>
        applicant.fullName.toLowerCase().includes(searchTerm.name) ||
        applicant.department.toLowerCase().includes(searchTerm.department) ||
        applicant.stage.toLowerCase().includes(searchTerm.stage)
    );
    setSearchResults(results);
    setCount(results.length);
  }, [searchTerm, props.applicantsData]); //we need to refer props.applicantsData,
  //otherwise it will give an error the dependency for it is missing. The code will still work though.

  //#region Option 4: use separate useEffect on each input field: CREATES BUGS. DON'T USE
  //PROBLEM: bug appears for the fields "name" & "department" by the first attempt to type value in input:

  // useEffect(() => {
  //   let results = props.applicantsData.filter((applicant) =>
  //     applicant.fullName.toLowerCase().includes(searchTerm.name)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm.name, props.applicantsData]);

  // useEffect(() => {
  //   let results = props.applicantsData.filter((applicant) =>
  //     applicant.department.toLowerCase().includes(searchTerm.department)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm.department, props.applicantsData]);

  // useEffect(() => {
  //   let results = props.applicantsData.filter((applicant) =>
  //     applicant.stage.toLowerCase().includes(searchTerm.stage)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm.stage, props.applicantsData]);
  //#endregion

  //reset all input values:
  const resetFilters = () => {
    setSearchTerm({
      name: "",
      department: "",
      stage: "",
    });
  };

  return display ? (
    <div className="applicantsOverview">
      <h1>Applicants Overview</h1>
      <SearchBar
        name={searchTerm.name}
        department={searchTerm.department}
        stage={searchTerm.stage}
        handleChange={handleChange}
      />
      <input
        className="count"
        placeholder={`Total: ${count} records...`}
      ></input>
      <Table
        name={searchTerm.name}
        department={searchTerm.department}
        stage={searchTerm.stage}
        data={searchResults}
      />
      <button className="reset-filters-btn" onClick={resetFilters}>
        Reset Filters
      </button>
    </div>
  ) : (
    <div className="display-applicants-overview">
      <img className="char_root" src={charachters} alt="Humans"></img>
      <button className="display-table-button" onClick={() => setDisplay(true)}>
        Display Applicants Data
      </button>
    </div>
  );
};

export default UserTable;

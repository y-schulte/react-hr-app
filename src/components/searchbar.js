import React from "react";

const SearchBar = (props) => {
  //call you handleChange function from the parent applicantOverview
  //don't forget to add event / e as an argument
  const handleOnChange = (e) => {
    props.handleChange(e);
  };

  return (
    <form className="searchBar">
      <input
        type="text"
        name="name"
        value={props.name} //add value to make sure event handler will work
        className="inputSearchBar"
        placeholder="Search by name.."
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="department"
        value={props.department} //add value to make sure event handler will work
        className="inputSearchBar"
        placeholder="Search by department.."
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="stage"
        value={props.stage} //add value to make sure event handler will work
        className="inputSearchBar"
        placeholder="Search by stage.."
        onChange={handleOnChange}
      />
    </form>
  );
};

export default SearchBar;

//TODOS for next improvements:
// - make filters for searchTerm.department and searchTerm.stage take dropdown lists to select from
// - add additional filter to sort the applicants by application date (from morst recent to oldest date and vice versa)

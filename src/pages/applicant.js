import React from "react";
import { useParams } from "react-router-dom";

const Applicant = (props) => {
  // Use the parameter to find the id of the user we want to see
  const { id } = useParams();

  // Next, find the user with the id we want to access in the url
  let chosenUser = props.users.find((user) => user.id === id);

  let content;
  console.log(chosenUser);
  if (chosenUser) {
    content = (
      <div className="card-user-page">
        <img
          className="avatar-user-page"
          src={chosenUser.img}
          alt="Avatar"
        ></img>
        <div className="container-user-page">
          <div className="user">Applicant Name: {chosenUser.fullName}</div>
          <div className="user">
            Application Date: {chosenUser.applicationDate}
          </div>
          <div className="user">Position: {chosenUser.position}</div>
          <div className="user">Department: {chosenUser.department}</div>
          <div className="user">Stage: {chosenUser.stage}</div>
        </div>
      </div>
    );
  } else {
    content = <div className="user">Error: user not found</div>;
  }

  return <div>{content}</div>;
};

export default Applicant;

//TODOS for next improvements:
// -add a dropdown with tags ("Important candidate", "100% match", etc.)
// -update the 'users' state variable in App.js with this 'tag' property
// -make sure it is displayed in the ApplicantsOverview.js

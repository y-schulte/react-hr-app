import React from "react";
import { Link } from "react-router-dom";

//component displayed on left side of root:
const Applicants = (props) => {
  //display applicants dynamically:
  let userList = props.users.map((user, index) => {
    console.log(props.users);
    return (
      <li key={index}>
        <div className="users">
          <div className="card" key={index}>
            <img className="avatar" src={user.img} alt="Avatar"></img>
            <div className="container">
              <h4>
                <b>{user.fullName}</b>
              </h4>
              <p>{user.position}</p>
              <Link to={`/applicant/${user.id}`}>
                <button className="accept-btn">Details</button>
              </Link>
              <button
                className="decline-btn"
                /*Make sure to refer to user.id (and not simply id) here 
                as we are using props to access the applicants state array ("users") from App.js and map through it*/
                onClick={() => props.delete(user.id)}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    //note:
    //you can do the hard coded version like this, but it's not optimal for multiple components
    //use array instead and render the components dynamically (line 57)
    // <div className="users">
    //   <Link to="/user/1">
    //     <div className="card">
    //       <img className="avatar" src={user1} alt="Avatar"></img>
    //       <div className="container">
    //         <h4>
    //           <b>Mike Russell</b>
    //         </h4>
    //         <p>7 common friends</p>
    //         <button className="accept-btn">Accept</button>
    //         <button className="decline-btn">Decline</button>
    //       </div>
    //     </div>
    //   </Link>
    <div className="users">
      <h3 id="recentApplicants">Applicants</h3>
      {userList}
    </div>
  );
};

export default Applicants;

//TODOS for next improvements:
// - apply a rule that only 10 recently created users are visible on the left side of root followed by the link to all applicants

//Reminder:
//if you want to pass your styles in the div component, do this: style={{ width: "100%" }}
// style="width:80%" will produce an error as react can only read objects.

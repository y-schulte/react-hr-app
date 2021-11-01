import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"; //router settings
import Navigation from "./components/navigation";
import allApplicants from "./pages/allApplicants";
import RecentApplicants from "./pages/recentApplicants";
import Register from "./pages/register";
import Applicants from "./pages/applicants";
import Applicant from "./pages/applicant";
import UserTable from "./pages/applicantsOverview";
import "./styles.css";

const App = () => {
  //declare initialUsers array to store applicants' data:
  //Note: due to tests done online, these applicants we already deleted in the localStorage
  let initialUsers = [
    {
      id: "1",
      fullName: "Mike Russell",
      img: "https://y-schulte.github.io/react-hr-app/source/avatar5.png",
      applicationDate: "21.09.2021",
      position: "SEO Marketing Manager",
      department: "Online Marketing",
      level: "Senior",
      stage: "Application submitted",
    },
    {
      id: "2",
      fullName: "Oscar Lafontain",
      img: "https://y-schulte.github.io/react-hr-app/source/avatar4.png",
      applicationDate: "19.09.2021",
      position: "Sales Manager",
      department: "Sales",
      level: "Junior",
      stage: "Screening",
    },
    {
      id: "3",
      fullName: "Gaylord Wise",
      img: "https://y-schulte.github.io/react-hr-app/source/avatar6.png",
      applicationDate: "15.08.2021",
      position: "Product Manager",
      department: "IT & Engineering",
      level: "Middle",
      stage: "1st interview",
    },
    {
      id: "4",
      fullName: "Lidya Grosse",
      img: "https://y-schulte.github.io/react-hr-app/source/avatar2.png",
      applicationDate: "15.08.2021",
      position: "Product Manager",
      department: "IT & Engineering",
      level: "Middle",
      stage: "2nd interview",
    },
  ];

  //getItem reads from localStorage in browser:

  //now set hooks for your applicant's array to be able to update it:
  const [users, setUsers] = useState(initialUsers);

  //use useEffect to to display the data in the browser with localStorage
  useEffect(() => {
    let usersLocal = JSON.parse(localStorage.getItem("users"));
    if (usersLocal) {
      setUsers(usersLocal);
    } else {
      localStorage.setItem("users", JSON.stringify(initialUsers));
    }
  }, []);

  //function to add new user via the form in Register.js:
  const updatedApplicants = (newApplicant) => {
    setUsers([...users, newApplicant]);
    const usersLocal = JSON.parse(localStorage.getItem("users"));
    usersLocal.push(newApplicant);
    localStorage.setItem("users", JSON.stringify(usersLocal));
  };

  //function to delete the applicant you want from your 'users' array by filtering only the items that
  //are not equal to the item you want to delete:
  const deleteApplicant = (id) => {
    //console.log(id);
    const users = JSON.parse(localStorage.getItem("users"));
    const updateUsers = users.filter((item) => item.id !== id);
    setUsers(updateUsers);
    localStorage.setItem("users", JSON.stringify(updateUsers));
  };

  //console.log("users" + JSON.stringify(users)); //to test

  return (
    <div>
      <Router>
        {/* Navigation bar - will always render no matter which route we are using */}
        <Navigation />
        <main>
          <Switch>
            {/* Route Applicants */}
            <Route path="/all-applicants" exact component={allApplicants} />
            {/* Route Recent Applicants */}
            <Route path="/recent-applicants" exact component={RecentApplicants}>
              <RecentApplicants />
            </Route>
            {/* Route Register*/}
            <Route
              path="/register"
              exact
              render={() => {
                return <Register users={users} update={updatedApplicants} />;
              }}
            />
            {/* TODO: change name : Route Users */}
            <Route
              path="/"
              exact
              render={() => {
                return (
                  <div className="root">
                    <Applicants users={users} delete={deleteApplicant} />
                    <UserTable applicantsData={users} />
                  </div>
                );
              }}
            />
            {/* Now let's apply the dynamic routing */}
            {/* Applicant Page */}
            <Route
              path="/applicant/:id"
              exact
              render={() => {
                return <Applicant users={users} />;
              }}
            />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;

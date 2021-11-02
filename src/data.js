// next todo: the data of users and dropdown lists can be stored in one data file (example here) and used across the app.  

import React from "react";

const users = [
  {
    id: "1",
    name: "Mike Russell",
    img: "./source/user1.png",
    friends: "7 common friends",
    applicationDate: "21.09.2021",
    position: "SEO Marketing Manager",
    department: "Online Marketing",
    level: "Senior",
    stage: "Application submitted",
  },
  {
    id: "2",
    name: "Oscar Lafontain",
    img: "./source/user2.png",
    friends: "20 common friends",
    applicationDate: "19.09.2021",
    position: "Sales Manager",
    department: "Sales",
    level: "Junior",
    stage: "Screening",
  },
  {
    id: "3",
    name: "Gaylord Wise",
    img: "./source/user3.png",
    friends: "2 common friends",
    applicationDate: "15.08.2021",
    position: "Product Manager",
    department: "IT & Engineering",
    level: "Middle",
    stage: "1st interview",
  },
  {
    id: "4",
    name: "Lidya Grosse",
    img: "./source/user4.png",
    friends: "10 common friends",
    applicationDate: "15.08.2021",
    position: "Product Manager",
    department: "IT & Engineering",
    level: "Middle",
    stage: "2nd interview",
  },
];

export default users;


const stages = ["Application submitted", "Screening", "1st interview", "2nd interview", "Contract proposal", "Contract accepted", "Rejected"], 

export default stages;


const departments = ["Online Marketing", "Sales", "IT & Engineering", "Administation", "Product Design", "HR", "Company Management"], 

export default stages;
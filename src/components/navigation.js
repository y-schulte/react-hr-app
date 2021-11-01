import React from "react";
import { Link } from "react-router-dom";
import noun_hiring_original from "../source/noun_hiring_original.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img
            className="nav_img"
            src={noun_hiring_original}
            alt="Facebook Logo"
          ></img>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Applicants</Link>
          </li>
          <li>
            <span>{">"}</span>
          </li>
          <li>
            <Link to="recent-applicants">Recent Applicants</Link>
          </li>
        </ul>
        <div className="register">
          <Link to="/register">Register Applicant</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

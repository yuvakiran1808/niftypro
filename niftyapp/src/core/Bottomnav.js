import React from "react";
import {Link} from 'react-router-dom';
const Bottomnav = () => {
  
  return (
    <div className="container border-top border-bottom border-2 mt-5">
      <nav className="navbar navbar-expand-lg bg-light text-center">
        <div className="container-fluid">
        <Link className="navbar-brand nav-link disabled" to="#"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-end"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-around  w-100">
              <Link  className = "nav-link text-dark" aria-current="page" to="/dashboard" >
              OVERVIEW
              </Link>
              <Link className="nav-link text-dark" to="/dashboard/chart">
                CHART
              </Link>
              <Link className="nav-link text-dark" to="#">
                TECHNICALS
              </Link>
              <Link className="nav-link text-dark">NEWS</Link>
              <Link className="nav-link text-dark">CONTRIBUTION</Link>
              <Link className="nav-link text-dark">COMPONENTS</Link>
              <Link className="nav-link text-dark">FORUM</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Bottomnav;

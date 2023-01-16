import React from "react";
import Navbar from "./Navbar";
import { Select } from "semantic-ui-react";
import Bottomnav from "./Bottomnav";
import Overview from "./Overview";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

const countryOptions = [
    {
        key : "1",
        value : "YTD",
        text: "YTD"
    },
    {
        key : "2",
        value : "1 Week",
        text: "1 Week"
    },
    {
        key : "3",
        value : "1 Month",
        text: "1 Month"
    },
    {
        key : "4",
        value : "2 Months",
        text: "2 Months"
    }
]


const Dashboard = () => {
  return (
    <div>
      <Navbar />

      {/* Top section */}

      <div className="container border-bottom border-secondary border-5">
        <h1 className="py-2">NIFTY 50</h1>
      </div>
      <div className="container  border-bottom border-dark border-1 py-4 ">
        <div className="row">
          <div className="col-md-6 py-2 mb-4">
            <h1 className="herotext fw-bold">17,992.15</h1>
            <p className="fs-3 fw-bold text-success"><span className="fs-3"><FontAwesomeIcon icon={faCaretUp} /></span> 133.95(0.64)</p>
            <p className="fs-5 text-muted">As on 14 jan, 2023 13:25 IST</p>
          </div>
          <div className="col-md-6">
            <div>
              <label className="text-muted form-label fw-bold" htmlFor="day">
                Day Range
              </label>
              <p className="d-flex justify-content-between">
                <span>9879</span>
                <span>9879</span>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-danger">L</h6>
                <input
                  type="range"
                  className="form-range custom-range px-3"
                  id="day"
                  min={0}
                  max= {10000} 
                />
                <h6 className="text-success">H</h6>
              </div>
            </div>
            <div>
              <label className="text-muted form-label py-2 fw-bold" htmlFor="week">
                52 Week Range
              </label>
              <p className="d-flex justify-content-between">
                <span>9879</span>
                <span>9879</span>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-danger">L</h6>
                <input
                  type="range"
                  className="form-range custom-range px-3"
                  id="week"
                  min={0}
                  max= {10000}
                  
                />
                <h6 className="text-success">H</h6>
              </div>
            </div>

            {/* returns section start*/}

            <div>
              <h3 className="text-muted py-2">Returns</h3>
              <div className="row">
                <div className="col-4 col-md-4 d-flex align-items-center justify-content-between">
                <Select placeholder='Select' options={countryOptions} />
                 <p className="ms-2">3.55%</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

   <Bottomnav />
   <Overview />
    </div>
  );
};

export default Dashboard;

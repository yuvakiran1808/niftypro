import React from "react";


const Overview  = ()=>{
    return(
      <div>
        <div className="container px-5 py-3">
            <div className="row gx-5">
                <div className="col-md-6 px-5">
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <span className="text-muted">Open</span>
                        <span className="text-dark fw-bold">17,867.50</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <span className="text-muted">Previous close</span>
                        <span className="text-dark fw-bold">17,867.50</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <span className="text-muted">Day High</span>
                        <span className="text-dark fw-bold">17,867.50</span>
                    </div>
                </div>
                <div className="col-md-6 px-5">
                <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <span className="text-muted">Day Low</span>
                        <span className="text-dark fw-bold">17,867.50</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <span className="text-muted">52 Week High</span>
                        <span className="text-dark fw-bold">17,867.50</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <span className="text-muted">52 Week Low</span>
                        <span className="text-dark fw-bold">17,867.50</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Overview;
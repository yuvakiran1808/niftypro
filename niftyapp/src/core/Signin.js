import React from "react";



const Signin = ()=>{
    return(
        <div className="mt-5 py-5">
            <h3 className="text-center">Signin Form</h3>
             <form action="" className="col-md-6 mx-auto">
                <div className="p-2">
                    <label htmlFor="">Enter your email: </label>
                    <input type="email" className="form-control border border-dark" required />
                </div>
                <div className="p-2">
                    <label htmlFor="">Enter your password: </label>
                    <input type="password" className="form-control border border-dark" required />
                </div>
                <div className=" mt-3 text-center">
                    <button className="btn btn-success">Login</button>
                </div>
             </form>
        </div>
    )
}


export default Signin;
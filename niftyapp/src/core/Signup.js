import React from "react";



const Signup = ()=>{
    return(
        <div className=" py-5 bg-dark text-white" style={{height : "100vh"}}>
        <h1 className="text-center">Signup Form</h1>
         <form action="" className="col-md-6 mx-auto">
            <div className="p-2">
                <label htmlFor="" className="py-2">Enter your name: </label>
                <input type="text" className="form-control border border-dark" required />
            </div>
            <div className="p-2" >
                <label htmlFor="" className="py-2">Enter your email: </label>
                <input type="email" className="form-control border border-dark" required />
            </div>
            <div className="p-2">
                <label htmlFor="" className="py-2">Enter your password: </label>
                <input type="password" className="form-control border border-dark" required />
            </div>
            <div className=" mt-3 text-center">
                <button className="btn btn-success">Register</button>
            </div>
         </form>
    </div>
    )
}


export default Signup;
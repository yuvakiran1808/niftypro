const User = require("../models/user");
const { check, body, validationResult } = require("express-validator");
var jwtt = require("jsonwebtoken");
var { expressjwt: jwt } = require("express-jwt");



exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      // error : errors.array()[0].param
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body); 
  console.log(req.body); 
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save the user in DB",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  User.findOne({ email }, (err, user) => {
    if (err||!user) {
     return res.status(400).json({
        error: "user email does not exists",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match",
      });
    }

    const token = jwtt.sign({ _id: user._id }, process.env.SECRET);
    res.cookie("token", token, { expire: new Date() + 9999 });

    //send response to the frontend
    const { _id, name, email, role } = user;
    return res.json({
      token,
      user: { _id, name, email, role },
    });
  });
};



exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Successfully signed out"
  });
};



//protected routes
exports.isSignedIn = jwt({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
});





//custom middlewares
exports.isAuthenticated = (req,res,next)=>{
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if(!checker){
    return res.status(403).json({
      error : "ACCESS DENIED"
    })
  }
     next();
}
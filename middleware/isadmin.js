const jwt = require("jsonwebtoken");

const isAdmin = (req,res,next) => {

  try {

    const token =
    req.cookies.token;

    if(!token){
      return res.redirect(
        "/admin"
      );
    }

    const decoded =
    jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.admin = decoded;

    next();

  } catch(error){

    return res.redirect(
      "/admin"
    );
  }
};

module.exports = isAdmin;

const jwt = require('jsonwebtoken');

// Middleware for authenticate user
const authenticateUser = (req, res, next) => {
    
    //   Checking if token is present or not
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
  try {
    // Decode the token for verifying purpose
    const decoded = jwt.verify(token, process.env.secretKey);
   
    req.userID = decoded.userID
    req.user = decoded;
    next(); // call next() so if there is any middleware present it will pass to that middleware else pass to the request handler
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = {authenticateUser};
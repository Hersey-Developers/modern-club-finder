const csrf = require('csrf'); // csrf protection library

const csrfProtection = csrf();

// sets the CSRF token in the header
exports.setCsrfHeader = async(req, res, next) => {
  res.setHeader('X-CSRF-Token', req.csrfToken());
  next();
}

// validates the CSRF token in the request handler
exports.validateCsrfHeader = async(req, res, next) => {
  const csrfToken = req.headers['X-CSRF-Token'];
  if(!csrfProtection.verify(req.csrfSecret, csrfToken)){
    return res.status(403).json({
      error: 'Access Denied',
      errorMessage: 'You do not have permission to access this resource' // input value
    });
  }
  next();
}

// checks and grabs from body if user has jwtToken
exports.checkToken = async(req, res, next) => {
  const token = req.body.token;
  try {
    // verify the token using secret key
    const decodedToken = jwt.verify(token, 'SECRET_KEY_NAME'); // input value

    // attach the decoded token to the request object for later use
    req.userData = { userId: decodedToken.userId };
    
    next();
  } catch (err) {
    return res
      .status(401)
      .json({
        message: 'Authentication failed'
      })
  }
}
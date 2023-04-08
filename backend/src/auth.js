const Tokens = require('csrf');

// create a new instance of the Tokens class
const tokens = new Tokens({
  saltLength: 16,
  secretLength: 32,
});

// generate a new secret
const secret = tokens.secretSync();

// generate a CSRF token for the secret
const token = tokens.create(secret);

// set the CSRF token in the response header
exports.setCsrfHeader = async(req, res, next) => {
  res.setHeader('X-CSRF-Token', token);
  next();
}

// validate the CSRF token in the request handler
exports.validateCsrfHeader = async(req, res, next) => {
  const csrfToken = req.headers['x-csrf-token'];
  if (!tokens.verify(secret, csrfToken)) {
    return res.status(403).json({
      error: 'Access Denied',
      errorMessage: 'You do not have permission to access this resource'
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

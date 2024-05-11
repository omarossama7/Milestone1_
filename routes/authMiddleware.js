const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  console.log('heree')
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};

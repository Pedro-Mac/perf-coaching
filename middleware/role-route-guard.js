module.exports = role => (req, res, next) => {
  if (req.user.role === role) {
    console.log('Is admin');
    next();
  } else {
    console.log('Is not admin');
    next(new Error('User is not authorized'));
  }
};
'use strict';

const { Router } = require('express');

const passport = require('passport');

const router = new Router();

router.post(
  '/sign-up',
  passport.authenticate('local-sign-up', {
    successRedirect: '/authentication/me',
    failureRedirect: '/sign-up'
  })
);

router.post(
  '/sign-in',
  passport.authenticate('local-sign-in', {
    successRedirect: '/authentication/me',
    failureRedirect: '/sign-in'
  })
);

router.get('/me', (request, response) => {
  const user = request.user;
  console.log(user);
  response.json({
    user: { role: user.role, name: user.name, email: user.email, _id: user._id }
  });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  req.logout();
  res.json({});
});

module.exports = router;

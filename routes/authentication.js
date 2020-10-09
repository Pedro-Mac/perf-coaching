'use strict';

const { Router } = require('express');

const passport = require('passport');

// const authenticationGuard = require('./../middleware/route-guard');
const roleRouteGuard = require('./../middleware/role-route-guard');

const router = new Router();

router.post(
  '/sign-up', roleRouteGuard('admin'),
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

router.get('/me' ,(req, res) => {
  const user = req.user;

  if (req.user._id.toString() === req.session.passport.user.toString()) {
    console.log('session belongs to user logged in');
    res.json({
      user: { role: user.role, name: user.name, email: user.email, _id: user._id }
    });
  } else {
    throw new Error('Authentication required');
  }
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  req.logout();
  res.json({});
});

module.exports = router;

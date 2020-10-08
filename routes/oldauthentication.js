// 'use strict';

// const { Router } = require('express');

// const bcryptjs = require('bcryptjs');
// const User = require('./../models/user');

// const router = new Router();

// router.post('/sign-up', (req, res, next) => {
//   const { name, email, password } = req.body;
//   bcryptjs
//     .hash(password, 10)
//     .then(hash => {
//       return User.create({
//         name,
//         email,
//         passwordHash: hash
//       });
//     })
//     .then(user => {
//       req.session.user = user._id;
//       res.json({ user });
//     })
//     .catch(error => {
//       next(error);
//     });
// });

// router.post('/sign-in', (req, res, next) => {
//   let user;
//   const { email, password } = req.body;
//   User.findOne({ email })
//     .then(document => {
//       if (!document) {
//         return Promise.reject(new Error("There's no user with that email."));
//       } else {
//         user = document;
//         return bcryptjs.compare(password, user.passwordHash);
//       }
//     })
//     .then(result => {
//       if (result) {
//         req.session.user = user._id;
//         console.log('onLogin', req.session);
//         res.json({
//           user: {
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             role: user.role
//           }
//         });
//       } else {
//         return Promise.reject(new Error('Wrong password.'));
//       }
//     })
//     .catch(error => {
//       next(error);
//     });
// });

// router.post('/sign-out', (req, res) => {
//   console.log('onLogout', req.session);
//   console.log('USER ', req.session.user);
//   req.session.destroy();

//   res.json({});
// });

// module.exports = router;

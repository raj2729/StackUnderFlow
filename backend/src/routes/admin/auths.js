const express = require('express');
const router = express.Router();

const { signup , signin , signout , getCertificates } = require('../../controllers/admin/auth');
const { validateSignupRequest , validateSigninRequest , isRequestValidated } = require('../../validators/auth');

const { requireSignin } = require('../../common-middlewares')

router
  .route('/admin/signin')

  .post( validateSigninRequest , isRequestValidated , signin )

router
  .route('/admin/signup')

  .post( validateSignupRequest , isRequestValidated , signup) 

router
  .route('/admin/signout')

  .post( requireSignin , signout) 

router
  .route('/admin/certificates')

  .get( getCertificates) 

module.exports = router;
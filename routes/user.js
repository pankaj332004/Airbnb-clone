const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { login, logout, renderLoginForm, renderSingupForm, singup } = require("../controllers/user.js");

router.route("/singup")
.get(renderSingupForm)
.post(wrapAsync(singup));

router.route("/login")
.get(renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local",{
        failureRedirect:'/login',
        failureFlash:true
    }),
    login,
);

router.get("/logout",logout);

module.exports = router;
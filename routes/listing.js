const express = require("express");
const router = express.Router();
const wrapAsync =require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");
const { isLoggedIn , isOwner , validateListing } = require("../middleware.js");
const { populate } = require("../models/review.js");
const { index, newRoute, showListing, createListing, editListing, updateListing, destroyListing } = require("../controllers/listings.js");
const multer = require('multer')

const {storage} = require('../cloudConfig.js')
const upload = multer({storage});



// index , create route
router
.route("/")
.get(wrapAsync(index))
.post(
  isLoggedIn ,
  upload.single('listing[image]'),
  validateListing,
  wrapAsync(createListing)
);


//New Route
router.get("/new", isLoggedIn , newRoute );

// show , update , delete route
router
.route("/:id")
.get(wrapAsync(showListing))
.put( 
  isLoggedIn ,
  isOwner,
  upload.single('listing[image]'),
  validateListing , 
  wrapAsync(updateListing)
)
.delete(
  isLoggedIn,
  isOwner ,
  wrapAsync(destroyListing)
);

//Edit Route
router.get("/:id/edit",
  isLoggedIn ,
  isOwner,
  wrapAsync(editListing)
);

module.exports = router;
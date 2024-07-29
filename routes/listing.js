const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer=require('multer');
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});

router.
route("/")
//INDEX ROUTE
.get(wrapAsync (listingController.index))
//CREATE ROUTE : TO PERFORM CREATE OPERATION FROM CRUD
.post(
   
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync (listingController.createListing)
);


//NEW ROUTE: TO PERFORM CREATE OPERATION FROM CRUD
router.get("/new",
    isLoggedIn,
    listingController.renderNewform);


router.route("/:id")
//SHOW ROUTE: TO PERFORM READ OPERATION FROM CRUD
.get(wrapAsync (listingController.showListing))

//Update Route
.put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync (listingController.updateListing))

//DELETE ROUTE:TO PERFORM DELETE OPERATION FROM CRUD OPERATION
.delete(
    isLoggedIn,
    isOwner,
    wrapAsync (listingController.destroyListing));


//Edit ROUTE:TO PERFORM EDIT AND UPDATE OPERATION
router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync (listingController.renderEditForm));

module.exports=router;
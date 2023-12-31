const express = require("express");
const router = express.Router();

//controllers 
const {
  insertPhoto,
  deletePhoto, 
  getAllPhotos
} = require("../controllers/PhotosController")

//Middlewares
const {photoInsertValidation} = require("../middlewares/PhotoValidation");
const authGuard = require("../middlewares/authGuard");
const validate = require("../middlewares/handleValidation");
const {imageUpload} = require("../middlewares/imageUpload")

//routes
router.post(
"/", 
authGuard, 
imageUpload.single("image"),
photoInsertValidation(),
validate,
insertPhoto)

router.delete("/:id", authGuard, deletePhoto)

router.get('/', authGuard, getAllPhotos)

module.exports = router;
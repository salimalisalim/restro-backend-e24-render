const express = require("express");
const { addRestaurant, getRestaurants } = require("../controllers/restaurantController");
const { verifyToken } = require("../middlewares/auth");
const upload = require("../middlewares/fileUpload");
const router = express.Router();

router.route('/restaurant').post(verifyToken,upload.single('photograph'), addRestaurant);
router.route('/restaurants').get(getRestaurants);

module.exports = router;
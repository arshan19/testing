const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

// Define routes for profile CRUD operations
router.post("/profiles", profileController.createProfile);
router.get("/profiles", profileController.getAllProfiles);
router.get("/profiles/:id", profileController.getProfileById);
router.put("/profiles/:id", profileController.updateProfile);
router.delete("/profiles/:id", profileController.deleteProfile);

module.exports = router;

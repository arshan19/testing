const Profile = require("../models/userProfile");

// Create a new profile
exports.createProfile = async (req, res, next) => {
  try {
    const { firstName, lastName, email, bio, password } = req.body;

    const newProfile = new Profile({
      firstName,
      lastName,
      email,
      bio,
      password,
    });

    const savedProfile = await newProfile.save();

    res.status(201).json(savedProfile);
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

// Get a list of all profiles
exports.getAllProfiles = async (req, res, next) => {
  try {
    const profiles = await Profile.find();

    res.status(200).json(profiles);
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

// Get a specific profile by ID
exports.getProfileById = async (req, res, next) => {
  try {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
      // Create a custom error and pass it to the error handler middleware
      const error = new Error("Profile not found");
      error.statusCode = 404;
      next(error);
      return;
    }

    res.status(200).json(profile);
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

// Update a profile by ID
exports.updateProfile = async (req, res, next) => {
  try {
    const { firstName, lastName, email, bio, password } = req.body;

    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, bio, password },
      { new: true }
    );

    if (!updatedProfile) {
      // Create a custom error and pass it to the error handler middleware
      const error = new Error("Profile not found");
      error.statusCode = 404;
      next(error);
      return;
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

// Delete a profile by ID
exports.deleteProfile = async (req, res, next) => {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req.params.id);

    if (!deletedProfile) {
      // Create a custom error and pass it to the error handler middleware
      const error = new Error("Profile not found");
      error.statusCode = 404;
      next(error);
      return;
    }

    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    // Pass the error to the error handler middleware
    next(error);
  }
};

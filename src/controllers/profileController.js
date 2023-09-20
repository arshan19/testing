const Profile = require("../models/userProfile"); // Import the Profile model

// Create a new profile
exports.createProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, bio } = req.body;

    // Create a new profile instance
    const newProfile = new Profile({
      firstName,
      lastName,
      email,
      bio,
    });

    // Save the profile to the database
    const savedProfile = await newProfile.save();

    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(500).json({ error: "Error creating the profile" });
  }
};

// Get a list of all profiles
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();

    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: "Error fetching profiles" });
  }
};

// Get a specific profile by ID
exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the profile" });
  }
};

// Update a profile by ID
exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, bio } = req.body;

    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, bio },
      { new: true } // Return the updated profile
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: "Error updating the profile" });
  }
};

// Delete a profile by ID
exports.deleteProfile = async (req, res) => {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req.params.id);

    if (!deletedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting the profile" });
  }
};

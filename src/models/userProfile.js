const mongoose = require("mongoose");

// Define the profile schema
const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Profile model using the schema
const Profile = mongoose.model("Profile", profileSchema);

// Export the Profile model
module.exports = Profile;

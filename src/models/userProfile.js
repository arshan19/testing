const mongoose = require("mongoose");

// Define the profile schema
const profileSchema = new mongoose.Schema(
  {
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
      validate: {
        validator: function (value) {
          // Use a regex pattern for email validation
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          return emailRegex.test(value);
        },
        message: "Invalid email format",
      },
    },
    bio: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          // Use a regex pattern for password strength validation
          // For example, requiring at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
          return passwordRegex.test(value);
        },
        message:
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Create a Profile model using the schema
const Profile = mongoose.model("Profile", profileSchema);

// Export the Profile model
module.exports = Profile;

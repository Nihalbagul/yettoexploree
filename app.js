const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const admin = require("./firebase");
const User = require("./models/User");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const Upload = require("./models/UploadModel");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Firebase Token Verification Middleware
async function verifyToken(req, res, next) {
  const idToken = req.headers.authorization;

  if (!idToken) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Authentication Endpoint
app.post("/api/authenticate", verifyToken, async (req, res) => {
  const { uid, name, email, picture } = req.user;

  let user = await User.findOne({ uid });

  if (!user) {
    user = new User({ uid, name, email, picture, role: email === process.env.ADMIN_EMAIL ? "admin" : "user" });
    await user.save();
  }

  res.send(user);
});

// Admin-Only Endpoint
app.get("/api/admin-only", verifyToken, async (req, res) => {
  const user = await User.findOne({ uid: req.user.uid });
  if (user.role !== "admin") {
    return res.status(403).send("Access forbidden: Admins only");
  }
  res.send({ message: "Welcome Admin!" });
});

// File Upload Endpoint (Authenticated)
app.post(
  "/api/upload",
  verifyToken,
  upload.fields([{ name: "file" }, { name: "profilePicture" }]),
  async (req, res) => {
    try {
      const { title, description } = req.body;
      
      // Check if files are uploaded
      if (!req.files || !req.files.file || !req.files.profilePicture) {
        return res.status(400).json({ message: "File and profile picture are required!" });
      }

      // Log the uploaded files to check
      console.log("Files uploaded: ", req.files);

      const newUpload = new Upload({
        title,
        description,
        fileUrl: `http://localhost:3001/uploads/${req.files.file[0].filename}`,
        profilePictureUrl: `http://localhost:3001/uploads/${req.files.profilePicture[0].filename}`,
        userId: req.user.uid, // Save reference to the authenticated user
      });

      await newUpload.save();

      res.status(201).json({
        message: "File and profile picture uploaded successfully!",
        upload: newUpload,
      });
    } catch (error) {
      console.error("Error uploading file or profile picture: ", error);
      res.status(500).json({ message: "Error uploading files", error });
    }
  }
);

app.get('/api/uploads', async (req, res) => {
  try {
    const uploads = await Upload.find(); // Fetch all uploads from the database
    res.json(uploads); // Send the uploads as JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching uploads' });
  }
});
// Server Start
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

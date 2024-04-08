import express from "express";
import userRoute from "./user.routes.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Linkedin");
});

router.use("/users", userRoute);
export default router;
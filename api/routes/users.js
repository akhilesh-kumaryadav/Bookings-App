import express from "express";
import { updateUser, deleteUser, getUser, getAllUser } from "../controllers/user.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getAllUser);

export default router;

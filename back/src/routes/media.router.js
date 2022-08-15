import { Router } from "express";
const media = Router();
import { mediaControllers } from "../controllers/index.js"


media
    .get("/media/:id?", mediaControllers.getMedia)
    .post("/media", mediaControllers.saveMedia)
    .delete("/media/:id", mediaControllers.deleteMedia)
    .put("/media/:id", mediaControllers.updateMedia)

export { media }   
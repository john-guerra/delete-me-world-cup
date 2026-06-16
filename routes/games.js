import express from "express";

import myMongoDB from "../db/MyMongoDB.js";



const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const games = await myMongoDB.getGames();
    console.log("Fetched games(len):", games.length);
    res.json(games);
  } catch (err) {
    console.error("Error fetching games:", err);
    res.status(500).send("Error fetching games");
  }
});

export default router;

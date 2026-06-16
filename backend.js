import express from "express";

import gamesRouter from "./routes/games.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/games/", gamesRouter);

app.use(express.static("frontend"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

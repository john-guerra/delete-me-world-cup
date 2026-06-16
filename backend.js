import express from "express";

import gamesRouter from "./routes/games.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", gamesRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

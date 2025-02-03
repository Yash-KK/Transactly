import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3003;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: true,
    message: "it works",
  });
});

app.listen(PORT, () => {
  console.log(`express web-hook listening on port:${PORT}`);
});

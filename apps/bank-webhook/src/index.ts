import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 3003;
const app: Express = express();
app.use(express.json())

// The bank will hit this webhook to tell 'Transactly's backend to update its balance 
app.post("/webhook", (req: Request, res: Response) => {
  res.json({
    status: true,
    message: "post works",
  });
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: true,
    message: "it works",
  });
});

app.listen(PORT, () => {
  console.log(`express web-hook listening on port:${PORT}`);
});

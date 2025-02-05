import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { prisma } from "@repo/db";

dotenv.config();
const PORT = process.env.PORT || 3003;
const app: Express = express();
app.use(express.json());

// The bank will hit this webhook to tell 'Transactly's backend to update its balance
app.post("/webhook", async (req: Request, res: Response) => {
  const { amount, token, userId } = req.body;

  // increment the balance for the user
  await prisma.$transaction([
    prisma.balance.updateMany({
      where: {
        userId: Number(userId),
      },
      data: {
        amount: {
          increment: Number(amount),
        },
      },
    }),
    // change the status of onRampTransaction to 'Success'

    prisma.onRampTransaction.updateMany({
      where: {
        token: token,
      },
      data: {
        status: "Success",
      },
    }),
  ]);

  res.json({
    status: true,
    message: "Updated",
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

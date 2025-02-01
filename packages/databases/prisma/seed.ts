import { PrismaClient, OnRampStatus } from "../generated/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      firstName: "Yash",
      lastName: "Kharche",
      email: "reachyashk@gmail.com",
      password: "helloworld",
    },
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "helloworld",
    },
  ];

  for (const userData of users) {
    const user = await prisma.user.create({
      data: {
        ...userData,
        Balance: {
          create: {
            amount: 1000,
            locked: 0,
          },
        },
        OnRampTransaction: {
          create: [
            {
              status: OnRampStatus.Success,
              token: "g16N3DAM8y",
              provider: "HDFC",
              amount: 500,
            },
            {
              status: OnRampStatus.Success,
              token: "AeL61ACYjV",
              provider: "HDFC",
              amount: 300,
            },
          ],
        },
      },
    });

    console.log(`Created user: ${user.email}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("complete");
  });

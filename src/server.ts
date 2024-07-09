import fastify from "fastify";
import { prisma } from "./lib/prisma.js";
const app = fastify();

app.get("/cadastrar", async () => {
  await prisma.trips.create({
    data: {
      destination: "São Paulo",
      starts_at: new Date(),
      ends_at: new Date(),
    },
  });
  return "registro cadastrado com sucesso!";
});

app.get("/listar", async () => {
  return await prisma.trips.findMany();
});
app.listen({ port: 4444 }).then(() => {
  console.log("Server rodando");
});

import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import cors from "@fastify/cors";
import { createTrip } from "../src/routes/create-trip.js";
import { confirmTrip } from "./routes/confirm-trip.js";

const app = fastify();

//Front http://localhost:3050
app.register(cors, {
  origin: true,
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(confirmTrip);
// Atualizando para usar o objeto de opções
app
  .listen({ port: 3090, host: "0.0.0.0" })
  .then(() => {
    console.log("Server rodando");
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

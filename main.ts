import "npm:reflect-metadata";
import { NestFactory } from "npm:@nestjs/core@10";
import {
  ExpressAdapter,
  type NestExpressApplication,
} from "npm:@nestjs/platform-express@10";
import express from "npm:express@4";
import { AppModule } from "./src/app.module.ts";

const app = await NestFactory.create<NestExpressApplication>(
  AppModule,
  new ExpressAdapter(express()),
);
const port = Number(Deno.env.get("PORT")) || 3000;

await app.listen(port, "0.0.0.0");
console.log(`Server running on http://localhost:${port}`);

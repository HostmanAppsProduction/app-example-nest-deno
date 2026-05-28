import { Module } from "npm:@nestjs/common@10";
import { AppController } from "./app.controller.ts";

@Module({
  controllers: [AppController],
})
export class AppModule {}

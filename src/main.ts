import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
  });
  const port = app.get(ConfigService).get("REVIEWS_APP_PORT");
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();

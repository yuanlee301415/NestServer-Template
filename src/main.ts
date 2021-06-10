// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');

  console.log('process.env.PORT:', process.env.PORT);
  await app.listen(process.env.PORT);
  console.log(
    `[${pkg.name}] Nest-server is running on: ${await app.getUrl()}`,
    new Date(),
  );
}

bootstrap();

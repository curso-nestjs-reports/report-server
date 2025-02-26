import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './configs';
import { RequestCancellationInterceptor } from './common/interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new RequestCancellationInterceptor());
  await app.listen(envs.port);
}
bootstrap();

import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { LoggingInterceptor } from './common/interceptors/logger.interceptor';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RightsService } from './rights/rights.service';
import { RightsController } from './rights/rights.controller';
import { RightsModule } from './rights/rights.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env.local', '.env'] }),
    UserModule,
    RightsModule,
    CommonModule,
  ],
  controllers: [AppController, RightsController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    AppService,
    RightsService,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CIController } from './ci.controller';
import { CIService } from './ci.service';

@Module({
  controllers: [CIController],
  providers: [CIService],
})
export class CIModule {}

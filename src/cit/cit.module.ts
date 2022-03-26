import { Module } from '@nestjs/common';
import { CitController } from './cit.controller';
import { CitService } from './cit.service';

@Module({
  controllers: [CitController],
  providers: [CitService],
})
export class CitModule {}

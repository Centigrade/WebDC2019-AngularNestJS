import { Module } from '@nestjs/common';
import { CompanionsModule } from './companions/companions.module';

@Module({
  imports: [CompanionsModule],
})
export class AppModule {}

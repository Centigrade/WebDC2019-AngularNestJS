import { Module } from '@nestjs/common';
import { CompanionsController } from './controllers/companions/companions.controller';
import { ContactController } from './controllers/contact/contact.controller';
import { CompanionsService } from './services/companions/companions.service';

@Module({
  controllers: [CompanionsController, ContactController],
  providers: [CompanionsService],
})
export class CompanionsModule {}

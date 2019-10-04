import { Module } from '@nestjs/common';
import { CompanionsController } from './controllers/companions/companions.controller';
import { ContactController } from './controllers/contact/contact.controller';

@Module({
  imports: [],
  controllers: [CompanionsController, ContactController],
})
export class AppModule {}

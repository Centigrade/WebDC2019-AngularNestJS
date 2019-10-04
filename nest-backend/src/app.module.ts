import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanionsController } from './controllers/companions/companions.controller';
import { ContactController } from './controllers/contact/contact.controller';

@Module({
  imports: [],
  controllers: [AppController, CompanionsController, ContactController],
  providers: [AppService],
})
export class AppModule {}

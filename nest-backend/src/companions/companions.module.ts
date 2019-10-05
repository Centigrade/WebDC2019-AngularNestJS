import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanionsController } from './controllers/companions/companions.controller';
import { ContactController } from './controllers/contact/contact.controller';
import { CompanionSchema } from './schemas/companion.schema';
import { CompanionsService } from './services/companions/companions.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Companion', schema: CompanionSchema }])],
  controllers: [CompanionsController, ContactController],
  providers: [CompanionsService],
})
export class CompanionsModule {}

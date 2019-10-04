import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { CompanionsModule } from './companions/companions.module';

dotenv.config();
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

const COLLECTION = 'companions';
const CONNECTION = `mongodb+srv://${user}:${password}@ngcompanioncluster-cpxno.mongodb.net/${COLLECTION}?retryWrites=true&w=majority`;

@Module({
  imports: [MongooseModule.forRoot(CONNECTION), CompanionsModule],
})
export class AppModule {}

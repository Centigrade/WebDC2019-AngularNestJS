import { Companion, CompanionDetails } from '@interfaces';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

const FILTER_MYSELF = { id: { $ne: 'angular' } };

@Injectable()
export class CompanionsService {
  constructor(@InjectModel('Companion') private readonly companionModel: Model<CompanionDetails>) {}

  async findAll(): Promise<Companion[]> {
    return await this.companionModel.find(FILTER_MYSELF).exec();
  }

  async findDetailsById(id: string): Promise<CompanionDetails> {
    const companionDetails = await this.companionModel.findOne({ id }).exec();
    return companionDetails;
  }
}

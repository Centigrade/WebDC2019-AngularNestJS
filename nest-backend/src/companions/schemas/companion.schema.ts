import * as mongoose from 'mongoose';

export const CompanionSchema = new mongoose.Schema({
  id: String,
  name: String,
  markdownName: String,
  avatar: String,
  favoriteColor: String,
  characteristics: [String],
});

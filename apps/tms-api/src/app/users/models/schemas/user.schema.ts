import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, required: true },
  subscriptionStartDate: { type: Date, required: true },
  subscriptionEndDate: { type: Date, required: true },
  isPremiumMember: { type: Boolean, required: true },
  premiumMembershipReferenceId: { type: String, required: true },
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  panCardNumber: { type: String, required: false },
  mobileNumber: { type: String, required: true },
});

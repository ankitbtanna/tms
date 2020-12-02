import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  registrationDate: { type: Date, required: true },
  subscriptionStartDate: { type: String, required: true },
  subscriptionEndDate: { type: String, required: true },
  isPremiumMember: { type: Boolean, required: true },
  premiumMembershipReferenceId: { type: String, required: true },
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  panCardNumber: { type: String, required: false },
  mobileNumber: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  try {
    console.log('Encrypting user password!');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    console.log('Password Encrypted!');
    next();
  } catch (error) {
    console.log('Error saving the user. ', error.message);
    next(error);
  }
});

UserSchema.post('save', async function (next) {
  try {
    console.log('User is saved!');
  } catch (error) {
    console.log('Error saving the user. ', error.message);
    next(error);
  }
});

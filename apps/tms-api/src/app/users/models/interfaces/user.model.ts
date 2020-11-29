export interface User {
  id: string;
  username: string;
  password: string;
  registrationDate: Date;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  isPremiumMember: boolean;
  premiumMembershipReferenceId: string;
  companyName: string;
  address: string;
  panCardNumber?: string;
  mobileNumber: string;
}

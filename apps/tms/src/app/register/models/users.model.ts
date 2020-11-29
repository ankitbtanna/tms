export interface User {
  id?: string;
  username: string;
  password: string;
  registrationDate: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  isPremiumMember: boolean;
  premiumMembershipReferenceId: string;
  companyName: string;
  address: string;
  panCardNumber?: string;
  mobileNumber: string;
}

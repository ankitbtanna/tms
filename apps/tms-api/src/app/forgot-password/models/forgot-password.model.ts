export interface Stakeholder {
  name: string;
  mobileNumber: string;
  description?: string;
  isBlocked: boolean;
}
export interface ShareTMS {
  owner: string;
  stakeholders: Stakeholder[];
}

import { Stakeholder } from "./stakeholder.model";

export interface AddStakeholderPayload {
    owner: string,
    stakeholders: Stakeholder[]
}
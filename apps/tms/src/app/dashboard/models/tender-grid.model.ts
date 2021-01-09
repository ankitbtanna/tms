export interface TenderGridModel {
    _id?: string;
    __v?: number;
    name: string;
    amount: string;
    fee: string;
    emd: string;
    referenceNumber: string;
    tenderId: string;
    publishedDate: string;
    bidDueDate: string;
    bidCutOffTime: string;
    userKeyName?: string;
    userLoginId?: string;
    userPassword?: string;
    userWebsite?: string;
    owner: string;
    createdDate: string;
    document?: string;
    isDeleted?: boolean;
    isComplete?: boolean;
    isNotFilled?: boolean;
}

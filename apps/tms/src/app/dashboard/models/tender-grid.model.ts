export interface TenderGridModel {
    _id?: string;
    __v?: number;
    name: string;
    amount: string;
    fee: string;
    emd: string;
    referenceNumber: string;
    tenderId: string;
    publishedDate: Date;
    bidDueDate: Date;
    bidCutOffTime: string;
    userKeyName?: string;
    userLoginId?: string;
    userPassword?: string;
    userWebsite?: string;
    owner: string;
    createdDate: Date;
    document?: string;
    isDeleted?: boolean;
    isComplete?: boolean;
    isActive?: boolean;
    isNotFilled?: boolean;
}

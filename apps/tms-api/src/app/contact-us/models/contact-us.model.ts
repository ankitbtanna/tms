export interface ContactUsQuery {
    _id?: string;
    _v?: string;
    username: string;
    date: string;
    isOpen: boolean;
    subject: string;
    description: string;
    caseId?: string;
}
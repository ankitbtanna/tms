export interface Transaction {
    _id?: string;
    username: string;
    orderId: string;
    orderDate: Date;
    amount: number;
    currency: string;
    successful: boolean;
}
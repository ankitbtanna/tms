export interface Transaction {
    _id?: string;
    username: string;
    orderId: string;
    orderDate: Date;
    successful: boolean;
}
export interface Transaction {
    _id?: string;
    username: string;
    orderId: string;
    orderDate: Date;
    amount: number;
    currency: string;
    successful: boolean;
    razorpay_payment_id: string;
    razorpay_signature: string;
}
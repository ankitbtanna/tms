export interface Order {
    id: string,
    amount: number,
    currency: string,
    receipt?: string,
}
import { HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction, TransactionDocument } from '../models/transaction.schema';
import { Model } from 'mongoose';
import { PAYMENT } from '../transaction.constant';
import { Order } from '../models/order.model';
const Razorpay = require('razorpay');

@Injectable()
export class TransactionService {
    constructor(@InjectModel(Transaction.name) private transaction: Model<TransactionDocument>, private http: HttpService) { }
    async createTransactionId(transaction: Transaction) {
        try {
            const newTransaction = await this.transaction(transaction);
            const createdTransaction = await newTransaction.save();
            return createdTransaction;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: JSON.stringify(error),
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateTransaction(transaction: Transaction, transactionId: string) {
        try {
            await this.transaction
                .findOneAndUpdate(
                    {
                        _id: transactionId
                    },
                    transaction,
                    { upsert: true }
                )
                .exec();
            const modifiedTransaction = await this.transaction
                .findOne({ _id: transactionId })
                .exec();
            return modifiedTransaction;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: JSON.stringify(error),
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async generateOrderId(orderInfo: Order) {
        const instance = new Razorpay({
            key_id: 'rzp_test_OhEHEss3A6g4fh',
            key_secret: 'gUS1wjhY85L3lYYCIyUDpGrQ',
        });

        const orderId = await instance.orders.create({
            amount: orderInfo.amount,
            currency: orderInfo.currency,
            receipt: orderInfo.receipt
        })
        return orderId;
    }

    async verifyOrder(orderId: string) {
        const instance = new Razorpay({
            key_id: 'rzp_test_OhEHEss3A6g4fh',
            key_secret: 'gUS1wjhY85L3lYYCIyUDpGrQ',
        });

        const order = await instance.orders.fetch(orderId);
        return order;
    }
}
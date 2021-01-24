import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { API_PATHS } from '../../api-paths';
import { Transaction } from '../models/transaction.model'
import { Order } from '../models/order.model'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) { }

  generateOrderId(order: Order): Observable<Order> {
    return this.http.post(API_PATHS.TRANSACTION.GENERATE_ORDER, order).pipe(map((order: Order) => {
      return order;
    }));
  }

  verifyOrder(orderId: string): Observable<any> {
    return this.http.get(API_PATHS.TRANSACTION.VERIFY_ORDER.replace('${orderId}', orderId)).pipe(map((order: any) => {
      return order;
    }));
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post(API_PATHS.TRANSACTION.CREATE_TRANSACTION, transaction).pipe(map((response: Transaction) => {
      return response;
    }));
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put(API_PATHS.TRANSACTION.UPDATE_TRANSACTION.replace('${transactionId}', transaction._id), transaction).pipe(map((transaction: Transaction) => {
      return transaction;
    }));
  }
}

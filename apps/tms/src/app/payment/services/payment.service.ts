import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  generateOrderId(): string {
    return uuidv4();
  }
}

import {
  Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Req, UseFilters
} from '@nestjs/common';
import { HttpExceptionFilter } from '../../exception/http-exception.filter';
import { TransactionService } from '../services/transaction.service';

@Controller('transaction')
@UseFilters(new HttpExceptionFilter())
export class TransactionController {
  constructor(private transactionService: TransactionService) { }

  @Post()
  createTransaction(@Req() req): any {
    return this.transactionService.createTransactionId(req.body);
  }

  @Put('update-transaction/:transactionId')
  updateTransaction(@Req() req, @Param() params): any {
    return this.transactionService.updateTransaction(req.body, params.transactionId);
  }

  @Post('order-id')
  generateOrderId(@Req() req): any {
    return this.transactionService.generateOrderId(req.body);
  }

  @Get('order-id/:orderId')
  verifyOrder(@Param() params): any {
    return this.transactionService.verifyOrder(params.orderId);
  }
}

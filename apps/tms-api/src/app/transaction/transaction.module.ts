import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenService } from '../auth/services/token.service';
import { Transaction, TransactionSchema } from './models/transaction.schema';
import { TransactionService } from './services/transaction.service';
import { TransactionController } from './transaction/transaction.controller'

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Transaction.name, schema: TransactionSchema }
        ]),
        HttpModule
    ],
    controllers: [TransactionController],
    providers: [TokenService, TransactionService],
    exports: [
        MongooseModule.forFeature([
            { name: Transaction.name, schema: TransactionSchema }
        ])
    ]
})
export class TransactionModule { }

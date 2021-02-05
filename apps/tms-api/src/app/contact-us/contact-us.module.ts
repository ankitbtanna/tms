import { HttpModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthTokenMiddleware } from '../auth/middlewares/auth-token-middleware.service';
import { TokenService } from '../auth/services/token.service';
import { ContactUsController } from './contact-us/contact-us.controller';
import { ContactUs, ContactUsSchema } from './models/contact-us.schema';
import { ContactUsService } from './services/contact-us.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: ContactUs.name, schema: ContactUsSchema }
        ]),
        HttpModule
    ],
    controllers: [ContactUsController],
    providers: [ContactUsService, TokenService],
    exports: [
        MongooseModule.forFeature([
            { name: ContactUs.name, schema: ContactUsSchema }
        ])
    ]
})
export class ContactUsModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(AuthTokenMiddleware).forRoutes({ path: 'contact-us/*', method: RequestMethod.ALL });
    }
}

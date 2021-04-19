import {
    Controller,
    Get,
    Header,
    Param,
    UseFilters
} from '@nestjs/common';
import { HttpExceptionFilter } from '../../exception/http-exception.filter';
import { ForgotPasswordService } from '../services/forgot-password.services';

@Controller('forgot-password')
@UseFilters(new HttpExceptionFilter())
export class ForgotPasswordController {
    constructor(private forgotPassword: ForgotPasswordService) { }

    @Get('generate-link/:email')
    @Header('Cache-Control', 'none')
    generateForgotPasswordLink(@Param() params) {
        console.log('came here');
        return this.forgotPassword.generateForgotPasswordLink(params.email);
    }

    @Get('verify-token/:email/:token')
    @Header('Cache-Control', 'none')
    verifyForgotPasswordToken(@Param() params) {
        return this.forgotPassword.verifyForgotPasswordToken(params.email, params.token);
    }
}

import { Controller, Post, Req, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../../exception/http-exception.filter';
import { ContactUsService } from '../services/contact-us.service';

@Controller('contact-us')
@UseFilters(new HttpExceptionFilter())
export class ContactUsController {
    constructor(private contactUsService: ContactUsService) { }
    @Post()
    createQuery(@Req() req) {
        return this.contactUsService.createQuery(req.body);
    }
}

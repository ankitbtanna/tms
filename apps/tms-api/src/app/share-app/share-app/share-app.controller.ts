import {
    Controller,
    Delete,
    Get,
    Header,
    Param,
    Put,
    Req,
    UseFilters
} from '@nestjs/common';
import { Request } from 'express';
import { HttpExceptionFilter } from '../../exception/http-exception.filter';
import { ShareAppService } from '../services/share-app.services';

@Controller('share-app')
@UseFilters(new HttpExceptionFilter())
export class ShareAppController {
    constructor(private shareAppService: ShareAppService) { }

    @Get('verify/:number')
    @Header('Cache-Control', 'none')
    verifyMobileNumber(@Param() params) {
        console.log(params.number);
        return this.shareAppService.verifyMobileNumber(params.number);
    }

    @Put('add-stakeholder')
    @Header('Cache-Control', 'none')
    addStakeHolder(@Req() req: Request) {
        console.log(req.body);
        return this.shareAppService.addStakeHolder(req.body);
    }

    @Put('block-stakeholder')
    @Header('Cache-Control', 'none')
    blockStakeHolder(@Req() req: Request) {
        return this.shareAppService.blockStakeHolder(
            req.body.owner,
            req.body.mobileNumber,
            req.body.isBlocked
        );
    }

    @Delete('delete-stakeholder')
    @Header('Cache-Control', 'none')
    deleteStakeHolder(@Req() req: Request) {
        return this.shareAppService.deleteStakeHolder(
            req.body.owner,
            req.body.mobileNumber
        );
    }
}

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
import { ShareService } from '../services/share.service';

@Controller('share')
@UseFilters(new HttpExceptionFilter())
export class ShareController {
  constructor(private shareService: ShareService) { }

  @Get('stakeholders/:owner')
  @Header('Cache-Control', 'none')
  getAllStakeHolders(@Param() params) {
    return this.shareService.getAllStakeHolders(params.owner);
  }

  @Put('add-stakeholder')
  @Header('Cache-Control', 'none')
  addStakeHolder(@Req() req: Request) {
    console.log(req.body);
    return this.shareService.addStakeHolder(req.body);
  }

  @Put('block-stakeholder')
  @Header('Cache-Control', 'none')
  blockStakeHolder(@Req() req: Request) {
    return this.shareService.blockStakeHolder(
      req.body.owner,
      req.body.mobileNumber,
      req.body.isBlocked
    );
  }

  @Delete('delete-stakeholder')
  @Header('Cache-Control', 'none')
  deleteStakeHolder(@Req() req: Request) {
    return this.shareService.deleteStakeHolder(
      req.body.owner,
      req.body.mobileNumber
    );
  }
}

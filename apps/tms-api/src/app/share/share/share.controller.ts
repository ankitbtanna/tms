import {
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Put,
  Req,
} from '@nestjs/common';
import { ShareService } from '../services/share.service';
import { Request } from 'express';

@Controller('share')
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

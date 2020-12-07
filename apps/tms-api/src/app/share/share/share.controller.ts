import { Controller, Delete, Get, Header, Put, Req } from '@nestjs/common';
import { ShareService } from '../services/share.service';
import { Request } from 'express';

@Controller('share')
export class ShareController {
  constructor(private shareService: ShareService) {}

  @Get('stakeholders')
  @Header('Cache-Control', 'none')
  getAllStakeHolders(@Req() req: Request) {
    return this.shareService.getAllStakeHolders(req.body.owner);
  }

  @Put('add-stakeholder')
  @Header('Cache-Control', 'none')
  addStakeHolder(@Req() req: Request) {
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

import {
  Controller, Delete, Get, Param, Post, Put, Req
} from '@nestjs/common';
import { TenderService } from '../services/tender.service';

@Controller('tenders')
export class TendersController {
  constructor(private tendersService: TenderService) {}
  // All the APIs should work if the owner of the tender is the modifier

  // This should work for admin only - RBAC
    @Get('all')
  getAllTenders(@Req() req): any {
    return this.tendersService.getAllTenders();
  }

    // This gives you all tenders, including deleted(soft)
  @Get('all/:username')
    getAllTendersByUser(@Param() params): any {
      return this.tendersService.getAllTendersByUserName(params.username);
    }

    // This gives you all non-deleted(soft) tenders
    @Get('all-tenders/:username')
  getTendersByUser(@Param() params): any {
    return this.tendersService.getTendersByUserName(params.username);
  }

    @Post()
    createTender(@Req() req): any {
      return this.tendersService.createTender(req.body);
    }

    // should be soft delete
    // Check ownership
    @Delete('delete/:tenderId')
    deleteTender(@Req() req, @Param() params): any {
      return this.tendersService.deleteTender(params.tenderId);
    }

    // should be soft delete
    // Check ownership
    @Get('retrieve/:tenderId')
    retrieveTender(@Req() req, @Param() params): any {
      return this.tendersService.retrieveTender(params.tenderId);
    }

    // should be hard delete
    // This should work for admin only - RBAC
    @Delete('delete-permanently/:tenderId')
    deleteTenderPermanently(@Param() params): any {
      return this.tendersService.deleteTenderPermanently(params.tenderId);
    }

    @Put('update/:tenderId')
    updateTender(@Req() req, @Param() params): any {
      return this.tendersService.updateTender(req.body, params.tenderId);
    }
}

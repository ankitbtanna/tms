import {
  Controller, Delete, Get, Param, Post, Put, Req
} from '@nestjs/common';

@Controller('tenders')
export class TendersController {
  // All the APIs should work if the owner of the tender is the modifier

  // This should work for admin only - RBAC
    @Get('all')
  getAllTenders(@Req() req): any {
    console.log('Get all tenders');
    return [];
  }

    @Get('all-tenders/:username')
    getTendersByUser(@Req() req, @Param() params): any {
      console.log('Get tenders by user');
      return [params.username];
    }

    @Post()
    createTender(@Req() req): any {
      console.log('Get tenders by user');
      return req.body;
    }

    // should be soft delete
    // Check ownership
    @Delete('delete/:tenderId')
    deleteTender(@Req() req, @Param() params): any {
      console.log('Delete tenders by user');
      return params.tenderId;
    }

    // should be hard delete
    // This should work for admin only - RBAC
    @Delete('delete-permanently/:tenderId')
    deleteTenderPermanently(@Req() req, @Param() params): any {
      console.log('Get tenders by user');
      return params.tenderId;
    }

    @Put('update/:tenderId')
    updateTender(@Req() req, @Param() params): any {
      console.log('Get tenders by user');
      return params.tenderId;
    }
}

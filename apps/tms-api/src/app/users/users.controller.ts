import {
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Req
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './services/users.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UserService) { }

  @Put('/:username')
  @Header('Cache-Control', 'none')
  updateUser(@Req() request: Request, @Param() params) {
    return this.userService.updateUser(request.body.premiumMembershipReferenceId, params.username);
  }

  @Post('update-password')
  @Header('Cache-Control', 'none')
  updateUserPassword(@Req() request: Request) {
    return this.userService.updateUserPassword(request.body.username, request.body.password);
  }

  @Get('details/:username')
  @Header('Cache-Control', 'none')
  getUser(@Param() params) {
    return this.userService.getUser(params.username);
  }

  @Get('subscription-details/:username')
  @Header('Cache-Control', 'none')
  getUserSubscriptionDetails(@Param() params) {
    return this.userService.getUserSubscriptionDetails(params.username);
  }

  @Post('register')
  @Header('Cache-Control', 'none')
  registerUser(@Req() request: Request) {
    return this.userService.registerUser(request.body);
  }

  @Get('check/:username')
  @Header('Cache-Control', 'none')
  checkUserRegistration(@Param() params) {
    return this.userService.checkUserRegistration(params.username);
  }

  @Post('login')
  @Header('Cache-Control', 'none')
  login(@Req() request: Request) {
    return this.userService.login(request.body);
  }

  @Post('refresh-token')
  @Header('Cache-Control', 'none')
  refreshToken(@Req() request: Request) {
    return this.userService.refreshToken();
  }

  @Delete('logout')
  @Header('Cache-Control', 'none')
  logout(@Req() request: Request) {
    return this.userService.logout();
  }
}

import {
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './services/users.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UserService) {}

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
    return this.userService.login();
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

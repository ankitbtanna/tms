import { Controller, Get, Header, HttpCode, Post, Req } from '@nestjs/common';
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
}

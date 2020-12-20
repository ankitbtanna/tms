import { Controller, Get } from '@nestjs/common';

import { KeyGeneratorService } from './services/key-generator.service';

@Controller('auth')
export class AuthController {
  constructor(private keyGeneratorService: KeyGeneratorService) {}

  @Get('generateKey')
  generateKey() {
    return this.keyGeneratorService.generateKey();
  }
}

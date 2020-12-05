import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { KeyGeneratorService } from './services/key-generator.service';
import { TokenService } from './services/token.service';

@Module({
  controllers: [AuthController],
  providers: [TokenService, KeyGeneratorService],
})
export class AuthModule {}

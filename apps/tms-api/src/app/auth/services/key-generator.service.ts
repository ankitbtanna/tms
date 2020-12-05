import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable({})
export class KeyGeneratorService {
  generateKey() {
    const accessTokenKey = crypto.randomBytes(32).toString('hex');
    const refreshTokenKey = crypto.randomBytes(32).toString('hex');
    return { accessTokenKey, refreshTokenKey };
  }
}

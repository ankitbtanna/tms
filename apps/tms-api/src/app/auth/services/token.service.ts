import { Injectable } from '@nestjs/common';
import * as JWT from 'jsonwebtoken';

@Injectable({})
export class TokenService {
  signAccessToken(username: string) {
    return new Promise((resolve, reject) => {
      const payload = {
        username: username,
      };
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: '1h',
        issuer: 'tms-ebharat.com',
        audience: username,
      };

      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      });
    });
  }
}

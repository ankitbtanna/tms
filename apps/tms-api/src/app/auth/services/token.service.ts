import * as JWT from 'jsonwebtoken';

import { Request, Response } from 'express';

import { Injectable } from '@nestjs/common';

@Injectable({})
export class TokenService {
  signAccessToken(username: string) {
    return new Promise((resolve, reject) => {
      const payload = {
        username
      };
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: '30m',
        issuer: 'tms-ebharat.com',
        audience: username
      };

      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      });
    });
  }

  verifyAccessToken(req: Request, res: Response, next: Function) {
    if (!req.headers.authorization) next(new Error('Invalid Token'));
    const authHeader = req.headers.authorization;
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];
    const secret = process.env.ACCESS_TOKEN_SECRET;
    JWT.verify(token, secret, (error, payload) => {
      if (error) return next(error);
      req.payload = payload;
      return next();
    });
  }
}

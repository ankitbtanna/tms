import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

import { TokenService } from '../services/token.service';

@Injectable()
export class AuthTokenMiddleware implements NestMiddleware {
  constructor(private tokenService: TokenService) {}

  // eslint-disable-next-line @typescript-eslint/ban-types
  use(req: Request, res: Response, next: Function): void {
    Logger.log(`################# REQUEST BEGIN ${req.method} - ${req.originalUrl} ###################`);
    Logger.log(`Request IP: ${req.ip}`);
    Logger.log(`Request Method: ${req.method}`);
    Logger.log(`Request Original URL: ${req.originalUrl}`);
    Logger.log(`Request Body: ${JSON.stringify(req.body, null, '\t')}`);
    Logger.log(`Request Headers: ${JSON.stringify(req.headers, null, '\t')}`);
    Logger.log(`Request Cookies: ${req.cookies}`);
    Logger.log(`################# REQUEST END ${req.method} - ${req.originalUrl} ###################`);

    this.tokenService.verifyAccessToken(req, res, next);
  }
}

import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as geoip from 'geoip-lite';

@Injectable()
export class GeoGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const ip = request.ip;
    const geo = geoip.lookup(ip);

    // Allow requests from Egypt or localhost
    if ( (geo && geo.country === 'EG') || ip === '::1' || ip === '127.0.0.1') {
      return true;
    }

    throw new ForbiddenException('Access to this resource is restricted to Egypt.');
  }
} 
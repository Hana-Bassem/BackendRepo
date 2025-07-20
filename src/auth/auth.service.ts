import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDbService } from '../user-db/user-db.service';

@Injectable()
export class AuthService {
  constructor(
    private userDbService: UserDbService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userDbService.findByUsername(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      //sign :creates a JWT token from the data (payload) you give it.
      access_token: this.jwtService.sign(payload),
    };
  }
}

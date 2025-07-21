import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { UserDbService } from './user-db.service';
import { Throttle } from '@nestjs/throttler';

@Controller('user-db')
@Throttle({ default: { limit: 5, ttl: 60000 } })
export class UserDbController {
  constructor(private userDbService: UserDbService) {}

  @Post('create')
  async create(@Body() body: { username: string; password: string }) {
    return this.userDbService.createUser(body.username, body.password);
  }
  @Put('updatePassword/:id')
  updateUserPassword(
    @Param('id') id: string,
    @Body() body: { password: string },
  ) {
    return this.userDbService.updatePassword(+id, body.password);
  }
  @Put('updateUsername/:id')
  updateUserUsername(
    @Param('id') id: string,
    @Body() body: { username: string },
  ) {
    return this.userDbService.updateUsername(+id, body.username);
  }

  @Get('findUser/:id')
  getuserbyid(@Param('id') id: number) {
    return this.userDbService.findUserbyId(id);
  }

  @Get('findallUser')
  getalluser() {
    return this.userDbService.findallUser();
  }
  @Get('findUserbyusername')
  getusername(@Body() body: { username: string }) {
    return this.userDbService.findByUsername(body.username);
  }
  @Delete('deleteuser/:id')
  deleteuser(@Param('id') id: string) {
    return this.userDbService.deleteUser(+id);
  }
}

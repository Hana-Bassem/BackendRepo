import { Controller ,Post,Body} from '@nestjs/common';
import { UserDbService } from './user-db.service';

@Controller('user-db')
export class UserDbController {

    constructor(private  userDbService: UserDbService) {}

  @Post('create')
  async create(@Body() body: { username: string; password: string }) {
    return this.userDbService.createUser(body.username, body.password);
  }
}

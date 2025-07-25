import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService, User } from './user.service';
@Controller('user')
export class UserController {
  //create an instance of class userservice in user.service
  constructor(private userService: UserService) {}
  @Get()
  getUser(): string {
    return 'hello user';
  }
  //@Param('id') --> take dynmaic part of url
  @Get(':id')
  getuserid(@Param('id') id: string): string {
    return `user ${id}`;
  }

  @Post('signup')
  create(@Body() userdata: User) {
    //UserService userservice=new UserService();
    const userexist = this.userService.finduser(userdata.username);
    if (userexist) {
      return 'user are already signup';
    } else {
      const user = this.userService.createuser(userdata);
      return { message: 'User signed up', user };
    }
  }

  @Put('update/:id')
  updateUser(
    //id is string cause url is only string
    @Param('id') id: string,
    @Body() body: { username: string; password: string },
  ) {
    //+id to convert from string to number
    return this.userService.updateUser(+id, body.username, body.password);
  }

  @Delete('delete/:id')
  deleteuser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}

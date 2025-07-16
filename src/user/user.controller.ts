import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {

@Get()
getUser():string{
    return"hello user"
}
//take dynmaic part of url
@Get(":id")
getuserid(@Param('id') id:string):string{
return `user ${id}`;

}
}

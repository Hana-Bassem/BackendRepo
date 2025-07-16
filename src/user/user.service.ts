import { Injectable } from '@nestjs/common';
//Injectable-->something like public
//structure
export interface User {
  id: number;
  username: string;
  password: string; 
}



@Injectable()
export class UserService {
   private users: User[]=[];

  createuser(user: User) {
    this.users.push(user);
    return user;
  }
  finduser(username:string){
    //user: is a parameter to search every user in users
    return this.users.find(user=>(user.username)=== username);
  }
}

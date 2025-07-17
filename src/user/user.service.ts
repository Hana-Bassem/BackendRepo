import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class UserService {
  private users: User[] = [];

  createuser(user: User) {
    this.users.push(user);
    return user;
  }

  finduser(username: string) {
    return this.users.find(user => user.username === username);
  }

  updateUser(id: number, username: string, password: string) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        username,
        password,
      };
      return this.users[userIndex];
    } else {
      return 'User not found';
    }
  }
  deleteUser(id: number){
    const userIndex=this.users.findIndex(user=>user.id===id);
    if (userIndex!=-1){
      const deletes =this.users.splice(userIndex,1);
       return 'User deleted';
    }
    else {
      return 'User not found';
    }
  }
}

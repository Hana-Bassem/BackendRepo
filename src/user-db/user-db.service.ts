import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDb } from './user-db.entity';
export class UserDbService {
constructor(
    //repository from typeorm allow us to easily interact with the database table that matches "userDb" entity  
    @InjectRepository(UserDb)
    private userRepository: Repository<UserDb>,
  ) {}
//create User
  async createUser(username: string, password: string): Promise<UserDb> {
    const user = this.userRepository.create({ username, password });
    //write it to DB
    return this.userRepository.save(user);
  }

  //update User 
 async updatePassword(id: number, newPassword: string) {
  return await this.userRepository.update({ id }, { password: newPassword });
}
async updateUsername (id:number,newusername:string){
    return this.userRepository.update({id},{username:newusername});
}

//find user
async findUserbyId(UserId:number){
    return this.userRepository.findOneBy({id: UserId})
}
async findallUser(){
    return this.userRepository.find()
}

//delete User
async deleteUser(userid:number){
    return this.userRepository.delete({id:userid})
}
}

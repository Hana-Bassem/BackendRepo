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

  async createUser(username: string, password: string): Promise<UserDb> {
    const user = this.userRepository.create({ username, password });
    //write it to DB
    return this.userRepository.save(user);
  }

    
}

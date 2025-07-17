import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from '../session/session.entity';
@Injectable()
export class SessionService {
constructor(

    @InjectRepository(Session)
    private userRepository: Repository<Session>,
  ) {}

  createSession(nameSession:string,doc:string){
    return this.userRepository.save({name:nameSession, doctor:doc});
  }

}

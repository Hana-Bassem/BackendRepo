import { Module } from '@nestjs/common';
import { UserDbController } from './user-db.controller';
import { UserDbService } from './user-db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDb } from '../user-db/user-db.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserDb])],
  controllers: [UserDbController],
  providers: [UserDbService],
    exports: [UserDbService], 
})
export class UserDbModule {}

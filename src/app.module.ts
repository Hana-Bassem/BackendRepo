import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDbModule } from './user-db/user-db.module';
import { SessionModule } from './session/session.module';
import { AuthModule } from './auth/auth.module';
import { CsvController } from './csv/csv.controller';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'backendshezlong',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserDbModule,
    SessionModule,
    AuthModule,
  ],
  controllers: [AppController, UserController, CsvController],
  providers: [
    AppService,
    UserService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}

import { Body, Controller, Post } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
    constructor( private SessionService:SessionService){}
    @Post('createSession')
    createsession(@Body() body:{name:string,doctor:string}){
        return this.SessionService.createSession(body.name,body.doctor);
    }
}

import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Client } from "../client/Models/client.models";



@Injectable()
export class ClientGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService ){}
    canActivate(context: ExecutionContext){
        const req = context.switchToHttp().getRequest()
        const clientHeader = req.headers.authorization
        if (!clientHeader)
        {
            throw new UnauthorizedException("Client unauthorized")
        } 
        const bearer = clientHeader.split(' ')[0]
        const token = clientHeader.split(' ')[1]
        if (bearer !== 'Bearer' || !token) {
            throw new UnauthorizedException({
                message: "Client authrizatsiyadan o'tmagan"
        })
    }
        async function verify(token: string, jwtService: JwtService){
            const client: Partial<Client> = await jwtService.verify(token, {
                secret: process.env.ACCESS_TOKEN_KEY
            });
            if (!client){
                throw new UnauthorizedException("Client unauthorized")
            }
            if (!client.is_active){
                throw new BadRequestException("Client is not active")
            }
            return true
        }
        return verify(token, this.jwtService)
    }
}

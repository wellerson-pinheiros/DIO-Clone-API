import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../constantes/constantes";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService){

        const jwtSecret =configService.get<string>('JWT_SECRET');
if (!jwtSecret) {
  throw new Error('JWT_SECRET não definida no .env');
}

        super({

            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') || 'default-secret',  // Garantindo um valor default
        });
    }


    async validate(payload: any){
        return payload;
    }
}
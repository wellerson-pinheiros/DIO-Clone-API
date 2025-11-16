

import { Bcrypt } from "./bcrypt/bcrypt";
import { UsuarioModule } from "../usuario/usuario.module";
import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from "./controller/auth.controller";
import { LocalStrategy } from "./strategy/local.strategy";
import { AuthService } from "./service/auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        forwardRef(() => UsuarioModule),
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
           imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'), // ou use JWT_SECRET se renomear
            signOptions: { expiresIn: '1d' },
         }),
        }),
    ],
    controllers: [AuthController],
    providers: [Bcrypt, AuthService, LocalStrategy],
    exports: [Bcrypt]
})
export class AuthModule {}
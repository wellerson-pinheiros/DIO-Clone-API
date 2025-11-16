import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local-auth.guard';

import { UsuarioLogin } from './../entities/usuariologin.entity';
import { AuthService } from '../service/auth.service';

@Controller("/auth")
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UsuarioLogin): Promise<any> {
        return this.authService.login(user);
    }

}
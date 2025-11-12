import { Module } from "@nestjs/common"

import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "./controller/usario.controller";

import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./service/usuario.service";


@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuarioController],
    providers: [UsuarioService],  
    exports: []
})
export class UsuarioModule {}
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/usuario.service";
import { DeleteResult } from "typeorm";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";




@Controller("usuarios")
export class UsuarioController {
    constructor(private readonly usuarioService : UsuarioService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get("/email/:email")
    @HttpCode(HttpStatus.OK)
    findByEmail(@Param('email') email: string):Promise<Usuario> { 
        return this.usuarioService.findByEmail(email);
    }
    @UseGuards(JwtAuthGuard)
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number):Promise<Usuario> {
        return this.usuarioService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUsuario(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.createUsuario(usuario);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    @HttpCode(HttpStatus.OK)
    updateUsuario(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }
    @UseGuards(JwtAuthGuard)
    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteUsuario(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.usuarioService.deleteUsuario(id);
    }
}
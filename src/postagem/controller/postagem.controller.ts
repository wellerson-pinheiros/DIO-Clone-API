import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { PostagensEntity } from "../entities/postagem.entity";
import { DeleteResult } from "typeorm";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('postagem')
export class PostagemController {
    constructor(
        private readonly postagemService: PostagemService
    ) {}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.postagemService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number) : Promise<PostagensEntity> {
        return this.postagemService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createPostagem(@Body() postagem: PostagensEntity) : Promise<PostagensEntity> {
        return this.postagemService.createPostagem(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deletePostagem(@Param('id', ParseIntPipe) id: number ) : Promise<DeleteResult> {
        return this.postagemService.deletePostagem(id);
    }
}
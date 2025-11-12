import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagensEntity } from "../postagem/entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controller/postagem.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PostagensEntity])],
    controllers: [PostagemController],
    providers: [PostagemService],  
    exports: []
})
export class PostagenModule {}
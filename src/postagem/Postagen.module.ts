import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagensEntity } from "./entities/Postagem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([PostagensEntity])],
    controllers: [],
    providers: [],  
    exports: []
})
export class PostagenModule {}
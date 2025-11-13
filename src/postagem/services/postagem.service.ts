import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { PostagensEntity } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class PostagemService {
    constructor(
         @InjectRepository(PostagensEntity)
            private postagemRepository: Repository<PostagensEntity>
    ){}

    async findAll(): Promise<PostagensEntity[]> {
        return await this.postagemRepository.find({
            relations: { usuario: true, feedbacks: true },
        });
    }

    async  findById(id: number): Promise<PostagensEntity> {
        const buscaPostagemPorID = await this.postagemRepository.findOne({
            where: {id},
            relations: { usuario: true,feedbacks: true },
        });
        if(!buscaPostagemPorID){
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        }       
        return buscaPostagemPorID;
    }

    async createPostagem(postagem: PostagensEntity): Promise<PostagensEntity> {
        return await this.postagemRepository.save(postagem);
    }

    async deletePostagem(id: number): Promise<DeleteResult> {
        const buscaPostagemPorID = await this.findById(id);
        return await this.postagemRepository.delete(id);
    }
 }
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcrypt: Bcrypt,
  ) {}

  

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations: { postagens: true },
    });
  }

  async findById(id: number): Promise<Usuario> {
    const buscaUsuarioPorID = await this.usuarioRepository.findOne({
      where: { 
        id
       },
      relations: { postagens: true },
    });
    if (!buscaUsuarioPorID)
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);

    return buscaUsuarioPorID;
  }

  async findByUsuario(usuario: string): Promise<Usuario | null> {
 return await this.usuarioRepository.findOne({
    where: {
       usuario : usuario
      },
  });
 
}

async findByEmail(email: string): Promise<Usuario> {
    const busca = await this.findByUsuario(email);
    if (busca == null) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return busca;
}

  async createUsuario(usuario: Usuario): Promise<Usuario> {
        
        const buscaUsuario =  await this.findByUsuario(usuario.usuario);

        if (buscaUsuario) {
           throw new HttpException("O Usuario ja existe!", HttpStatus.BAD_REQUEST);
        }
        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);
        

    }
   async update(usuario: Usuario): Promise<Usuario> {

         await this.findById(usuario.id);

        const buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (buscaUsuario && buscaUsuario.id !== usuario.id)
            throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepository.save(usuario);

    }


  async deleteUsuario(id: number): Promise<DeleteResult> {
    const buscaUsuarioPorID = await this.findById(id);
    if (!buscaUsuarioPorID) {
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);
    }

    return await this.usuarioRepository.delete(id);
  }
}

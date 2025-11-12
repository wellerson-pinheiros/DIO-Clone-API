import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findById(id: number): Promise<Usuario> {
    const buscaUsuarioPorID = await this.usuarioRepository.findOne({
      where: { id },
    });
    if (!buscaUsuarioPorID)
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);

    return buscaUsuarioPorID;
  }

  async findByEmail(email: string): Promise<Usuario> {
    const buscaUsuarioPorEmail = await this.usuarioRepository.findOne({
      where: { email: email.toLowerCase() },
    });

    if (!buscaUsuarioPorEmail) {
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);
    }

    return buscaUsuarioPorEmail;
  }

  async createUsuario(usuario: Usuario): Promise<Usuario> {
    const buscaUsuarioPorEmail = await this.usuarioRepository.findOne({
      where: { email: usuario.email.toLowerCase() },
    });

    if (buscaUsuarioPorEmail) {
      throw new HttpException('Usuario ja existe', HttpStatus.BAD_REQUEST);
    }

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

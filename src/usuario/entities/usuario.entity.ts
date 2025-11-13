import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostagensEntity } from '../../postagem/entities/postagem.entity';
import { FeedbackEntity } from '../../feedback/entities/feedback.entity';


@Entity({name:'tb_usuarios'})
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 300 })
  nome: string;
  @IsNotEmpty({ message: 'O atributo email é obrigatório!' })
  @Column({ length: 300, unique: true, nullable: false })
  @IsEmail()
  email: string;
  @Column({ length: 100 })
  @MinLength(8, { message: 'A senha deve ter no minimo 8 caracters' })
  @IsNotEmpty()
  senha: string;
  @Column({ length: 5000, nullable: true })
  foto: string;


  @OneToMany(() => PostagensEntity, (postagem) => postagem.usuario) 
  postagens: PostagensEntity[];

  @OneToMany(() => FeedbackEntity, (feedback) => feedback.usuario)
  feedbacks: FeedbackEntity[];
}

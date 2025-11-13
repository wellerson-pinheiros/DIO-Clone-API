import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { PostagensEntity } from "../../postagem/entities/postagem.entity";

@Entity({name: 'tb_feedbacks'})
export class FeedbackEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'text', nullable: true})
    comentario: string;
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    dataComentario: Date;

    // Cada feedback pertence a um usuário
  @ManyToOne(() => Usuario, (usuario) => usuario.feedbacks, { onDelete: 'CASCADE' })
  usuario: Usuario;

  // Cada feedback pertence a uma postagem
  @ManyToOne(() => PostagensEntity, (postagem) => postagem.feedbacks, { onDelete: 'CASCADE' })
  postagem: PostagensEntity;
    

}   
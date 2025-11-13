import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { FeedbackEntity } from "../../feedback/entities/feedback.entity";

@Entity({name: 'tb_postagens'})
export class PostagensEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @IsNotEmpty({message:'O atributo título é obrigatório!'})
    @Column({length: 300, nullable: false})
    titulo: string;
    @Column({type: 'text', nullable: true})
    descricao: string;
    @Column({length: 5000, nullable: true})
    fotoPostagem: string;  
    @Column({length: 5000, nullable: true})
    videoPostagem: string;
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    dataPostagem: Date;

    @ManyToOne(() => Usuario, (usuario) => usuario.postagens, {
    onDelete: 'CASCADE', // Se o usuário for deletado, suas postagens também são
  })
  usuario: Usuario;

    @OneToMany(() => FeedbackEntity, (feedback) => feedback.postagem)
    feedbacks: FeedbackEntity[];
}

import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

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
}

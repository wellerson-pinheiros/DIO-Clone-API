import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
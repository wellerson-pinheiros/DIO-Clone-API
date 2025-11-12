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
    descrição: string;
    @Column({length: 5000, nullable: true})
    foto: string;  
    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    dataPostagem: Date;
}
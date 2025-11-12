import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { PostagenModule } from './postagem/Postagen.module';
import { PostagensEntity } from './postagem/entities/postagem.entity';


@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true, // deixa o .env disponível em toda a aplicação
    }),

    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Usuario, PostagensEntity],
    synchronize: true,
}),
UsuarioModule,
PostagenModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

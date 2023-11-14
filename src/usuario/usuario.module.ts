import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { usuarioController } from "./usuario.controller";
import { usuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidador } from "./validacao/email-eh-unico";
import { UsuarioService } from "./usuario.service";
import { UsuarioEntity } from "./usuario.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [usuarioController],
    providers: [UsuarioService, usuarioRepository, EmailEhUnicoValidador]
})
export class UsuarioModule {}
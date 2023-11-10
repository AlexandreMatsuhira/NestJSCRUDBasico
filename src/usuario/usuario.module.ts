import { Module } from "@nestjs/common";
import { usuarioController } from "./usuario.controller";
import { usuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidador } from "./validacao/email-eh-unico";

@Module({
    controllers: [usuarioController],
    providers: [usuarioRepository, EmailEhUnicoValidador]
})
export class UsuarioModule {}
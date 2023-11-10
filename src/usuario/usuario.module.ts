import { Module } from "@nestjs/common";
import { usuarioController } from "./usuario.controller";
import { usuarioRepository } from "./usuario.repository";

@Module({
    controllers: [usuarioController],
    providers: [usuarioRepository]
})
export class UsuarioModule {}
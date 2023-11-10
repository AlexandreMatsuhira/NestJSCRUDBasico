import { Body, Controller, Get, Post } from "@nestjs/common";
import { usuarioRepository } from "./usuario.repository";
import { criaUsuarioDTO } from "./dto/criaUsuario.dto";

@Controller('/usuarios')
export class usuarioController {
    
    constructor(private usuarioRepository: usuarioRepository) {}

    
    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){
        this.usuarioRepository.salvar(dadosUsuario)
        return dadosUsuario;

    }
    @Get()
    async listUsuarios() {
        return this.usuarioRepository.listar();
    }

}
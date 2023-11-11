import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { usuarioRepository } from "./usuario.repository";
import { criaUsuarioDTO } from "./dto/criaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { atualizaUsuarioUsuarioDTO } from "./dto/atualizaUsuario.dto";

@Controller('/usuarios')
export class usuarioController {
    
    constructor(private usuarioRepository: usuarioRepository) {}

    
    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosUsuario.email;
        usuarioEntity.senha = dadosUsuario.senha;
        usuarioEntity.nome = dadosUsuario.nome;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity);
        return {
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Usuario Criado com sucesso'
        }

    }
    @Get()
    async listUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
        return usuariosLista;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: atualizaUsuarioUsuarioDTO) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: usuarioAtualizado,
            message: "Usuario Atualizado",
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return{
            usuario: usuarioRemovido,
            message: 'usuario removido'
        }
    }

}
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ) {}

    async listaUsuarios() {
        const usuariosSalvoas = await this.usuarioRepository.find();
        const usuariosLista = usuariosSalvoas.map(
            (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome)
            )
            return usuariosLista;
        }
    }



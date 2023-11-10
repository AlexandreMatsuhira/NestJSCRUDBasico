import { Injectable } from "@nestjs/common";

@Injectable()
export class usuarioRepository {
    private usuarios = [];

    async salvar(usuario) {
        this.usuarios.push(usuario)
    }

    async listar() {
        return this.usuarios;
    }

    async remover() {
        
    }
}
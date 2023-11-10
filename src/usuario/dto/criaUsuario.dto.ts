import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico";

export class criaUsuarioDTO{
    
    @IsNotEmpty({ message: 'O nome não deve ser vazio' })
    nome: string;

    @IsEmail(undefined, { message: 'Email informado invalido' })
    @EmailEhUnico({message: 'Já existe um usuario com esse email'})
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    senha: string
}
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico";

export class atualizaUsuarioUsuarioDTO{
    
    @IsNotEmpty({ message: 'O nome não deve ser vazio' })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: 'Email informado invalido' })
    @EmailEhUnico({message: 'Já existe um usuario com esse email'})
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
    @IsOptional()
    senha: string
}
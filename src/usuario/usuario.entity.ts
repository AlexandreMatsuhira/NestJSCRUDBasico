import { Entity, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Usuarios'})
export class UsuarioEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ name: 'nome', length: 100, nullable: false })
    nome: string;

    @Column({ name: 'email', length: 60, nullable: false })
    email: string;

    @Column({ name: 'senha', length: 255, nullable: false })
    senha: string;

    @CreateDateColumn({ name: 'created_at' })
    createAt: string;
    @UpdateDateColumn({ name: 'update_at' })
    updateAt: string;
    @DeleteDateColumn({ name: 'delete_at' })
    deletedAt: string;
    
}
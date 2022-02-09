//server para o typeorm gravar na tabela
import Order from "../../../../order/infra/typeorm/entities/Order";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("clientes")
export default class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  data_nascimento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Order, ( order ) => order.cliente)
  pedidos: Order[];
}

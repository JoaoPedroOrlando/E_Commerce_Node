import Product from "../../../../products/infra/typeorm/entities/Product";
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";

@Entity("categorias")
export default class Category {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    descricao:string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
    /**
    * Uma categoria pode ter muitos produtos
    */
    @OneToMany(() => Product, (product) => product.categoria)
    produtos: Product[];

}

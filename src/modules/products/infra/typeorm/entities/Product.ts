import Category from "../../../../category/infra/typeorm/entities/Category";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import OrderProduct from "../../../../../modules/order/infra/typeorm/entities/OrderPorduct";
@Entity("produtos")
export default class Product{
    @PrimaryGeneratedColumn("increment")
    id:number;
    @Column()
    nome:string;
    @Column("float",{precision: 10,scale: 2})
    preco:number;
    @Column()
    quantidade:number;
    @Column()
    categoria_id: number;
    /**
    * Muitos produtos podem ter a mesma categoria
    */
    @ManyToOne(() => Category, (category) => category.produtos)
    @JoinColumn({ name: "categoria_id" })
    categoria: Category;

    @OneToMany(() => OrderProduct, (order_product) => order_product.produto)
    pedido_produtos: OrderProduct[];
}
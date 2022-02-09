import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";

export default interface IProductInterface{
    create(data:IProductDTO):Promise<Product>;
    update(data:IProductDTO):Promise<Product>;
    findById(id: number): Promise<Product | undefined>;
    findByCategory(id:number): Promise <Product[]>;
}
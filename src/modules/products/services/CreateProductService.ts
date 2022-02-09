import IProductDTO from "modules/products/dtos/IProductDTO";
import AppError from "../../../shared/errors/AppErrors";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class CreateProductService{
    public async execute(data:IProductDTO): Promise<Product>{
        const productRepository = new ProductRepository();
        if(data.id){
            throw new AppError("Id nao deve ser informado no cadastro");
        }
        const product = await productRepository.create(data);
        return product;
    }


}
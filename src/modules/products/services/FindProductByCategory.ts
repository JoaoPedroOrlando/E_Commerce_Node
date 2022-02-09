import AppError from "../../../shared/errors/AppErrors";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";

export default class FindProductByCategoryService {
  public async execute(id: number): Promise<Product[]> {
    const productRepository = new ProductRepository();

    const products = await productRepository.findByCategory(id);

    return products;
  }
}
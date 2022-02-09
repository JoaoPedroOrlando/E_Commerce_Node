import IProductDTO from "modules/products/dtos/IProductDTO";
import IProductRepository from "modules/products/repositories/IProductRepository";
import { getRepository, Repository } from "typeorm";
import Product from "../entities/Product";


export default class ProductRepository implements IProductRepository{
    private ormRepository: Repository<Product>;

    constructor() {
        this.ormRepository = getRepository(Product);
    }
    async findByCategory(id: number): Promise<Product[]> {
        return this.ormRepository
        .createQueryBuilder("prod")
        .leftJoinAndSelect("prod.categoria", "cat")
        .where('cat.id = :id', {id})
        .getMany()
    }

    async findById(id: number): Promise<Product | undefined> {
        //return this.ormRepository.findOne(id, {
        //    relations: ["categoria"],
        //});
        // return this.ormRepository.findOne(id);
         return this.ormRepository
           .createQueryBuilder("prod")
          .leftJoinAndSelect("prod.categoria", "cat")
           .where("prod.id = :id", { id })
           .getOne();

    }

    async update(data: IProductDTO): Promise<Product> {
        return await this.ormRepository.save(data);
    }
    
    async create(data: IProductDTO): Promise<Product> {
        return await this.ormRepository.save(data);   
    }

    
}
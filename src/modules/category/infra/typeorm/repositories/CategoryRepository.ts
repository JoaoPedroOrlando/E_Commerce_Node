import ICategoryDTO from "modules/category/dtos/ICategoryDTO";
import ICategoryRepository from "modules/category/repositories/ICategoryRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Category from "../entities/Category";



export default class CategoryRepository implements ICategoryRepository{
    private ormRepository: Repository<Category>;

    constructor(){
        this.ormRepository = getRepository(Category);
    }

    async create(data: ICategoryDTO): Promise<Category> {
        //cria uma nova instancia de IcategoryDto e copia as propriedades de data
        const category = this.ormRepository.create(data);
        //se existir atualiza, se nao existir insere
        return this.ormRepository.save(category);
    }
    async list(): Promise<Category[]> {
        const listOfCategories = await this.ormRepository.find();
        return listOfCategories;
    }
    async findById(id: number): Promise<Category | undefined> {
        const category = await this.ormRepository.findOne(id);
        return category;
        
    }
    async update(data: ICategoryDTO): Promise<Category> {
        const category = await this.ormRepository.save(data);
        return category;

    }
    async delete(id: number): Promise<DeleteResult> {
       return await this.ormRepository.delete(id);
    }

}
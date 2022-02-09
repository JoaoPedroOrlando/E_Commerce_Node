
import AppError from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";


export default class FindByIdService{

    public async execute(id:number): Promise<Category | undefined>{
        const categoryRepository = new CategoryRepository();
        const category = await categoryRepository.findById(Number(id));
        if(!Category) throw new AppError("Cliente nao encontrado !");
        return category;
    }
    
}
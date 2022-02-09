import ICategoryDTO from "modules/category/dtos/ICategoryDTO";
import AppError from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class CreateCategoryService{
    public async execute (data: ICategoryDTO):Promise<Category>{
        //regra de negocio | tratamento de erros
        if(data.id){
            throw new AppError("O id nao deve ser enviado para cadastro");
        }
        const categoryRepository = new CategoryRepository();
        return await categoryRepository.create(data);  
    }
}
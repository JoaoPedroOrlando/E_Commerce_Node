import ICategoryDTO from "modules/category/dtos/ICategoryDTO";
import AppError from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import FindCategoryByIdService from "./FindCategoryByIdService";


export default class UpdateCategoryService {
    public async  execute (data: ICategoryDTO): Promise<Category>{
        const categoryRepository = new CategoryRepository();
        const findCategoryById = new FindCategoryByIdService();
        //verifica se ha id no corpo da request
        if (!data.id) {
            throw new AppError("Atualização precisa do id do cliente");
          }
        // verifica se ha uma categoria com esse id
        await findCategoryById.execute(data.id);
        return await categoryRepository.update(data);
    }
}
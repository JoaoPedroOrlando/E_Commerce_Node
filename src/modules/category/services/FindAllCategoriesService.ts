import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import Category from "../infra/typeorm/entities/Category";

export default class FindAllCategoriesService {
    public async execute(): Promise<Category[]>{
        const categoryRepository = new CategoryRepository();

        const listOfCategories = await categoryRepository.list();

        return listOfCategories;
    }
}
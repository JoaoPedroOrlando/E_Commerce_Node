import { DeleteResult } from "typeorm";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import FindCategoryByIdService from "./FindCategoryByIdService";


export default class DeleteCategoryService {
    public async execute(id:number):Promise<DeleteResult>{
        const categoryRepository = new CategoryRepository();
        const findCategoryService =new FindCategoryByIdService();
        await findCategoryService.execute(id);

        const result = await categoryRepository.delete(id);
        return result;
    }
}
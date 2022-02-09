import { Request,Response } from "express";
import CreateCategoryService from "../../../services/CreateCategoryService";
import DeleteCategoryService from "../../../services/DeleteCategoryService";
import FindAllCategoriesService from "../../../services/FindAllCategoriesService";
import FindCategoryByIdService from "../../../services/FindCategoryByIdService";
import UpdateCategoryService from "../../../services/UpdateCategoryService";



class CategoryController {
    async create(request: Request, response: Response): Promise<Response>{
        const data = request.body;

        const createCategoryService = new CreateCategoryService();
    
        const category = await createCategoryService.execute(data);
    
        return response.json(category);
    }

    async list(request:Request, response: Response): Promise<Response>{

        const findAllCategoriesService = new FindAllCategoriesService();

        const list = await findAllCategoriesService.execute();
        
        return response.json(list);
    }

    async findById(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const findCategoryById = new FindCategoryByIdService();

        const category = await findCategoryById.execute(Number(id));

        return response.json(category);
    }

    async update(request: Request, response: Response): Promise<Response>{
        const data = request.body;
        const {id} = request.params;

        const updateCategoryService = new UpdateCategoryService();

        const data_to_update = {
            ...data, // rest / spread operator
            id: Number(id),
        };

       const category = await updateCategoryService.execute(data_to_update);

        return response.json(category);
    }

    async delete(request:Request, response:Response): Promise<Response>{
        const {id} = request.params;
        const deleteCategoryService = new DeleteCategoryService();
        const result = await deleteCategoryService.execute(Number(id));
        return response.json(result);
    }
}

export default new CategoryController();
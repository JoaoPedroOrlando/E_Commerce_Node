import { Request, Response } from "express";
import CreateProductService from "../../../services/CreateProductService";
import FindProductByIdService from "../../../services/FindProductByIdService";
import UpdateProductService from "../../../services/UpdateProductService";
import FindProductByCategoryService from "../../../services/FindProductByCategory";


class ProductsController{

    async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;
    
        const createProductService = new CreateProductService();
    
        const product = await createProductService.execute(data);
    
        return response.json(product);
      }

      async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
    
        const findProductService = new FindProductByIdService();
    
        const product = await findProductService.execute(Number(id));
    
        return response.json(product);
      }

      async findByCategory(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        
        const findProductByCategory = new FindProductByCategoryService();

        const products = await findProductByCategory.execute(Number(id));

        return response.json(products);
      }

      async update(request: Request, response: Response): Promise<Response>{
        const data = request.body;
        const { id } = request.params; // desestruturação
        const updateClientService = new UpdateProductService();
        const data_to_update = {
          ...data, // rest / spread operator
          id: Number(id),
        };

        const product = await updateClientService.execute(data_to_update);
        return response.json(product);
      }

}


export default new ProductsController();
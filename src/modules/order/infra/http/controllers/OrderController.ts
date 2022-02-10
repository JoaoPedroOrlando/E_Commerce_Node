
import { Request, Response } from "express";
import FindOrderByIdService from "../../../services/FindOrderByIdService";
import CreateOrderService from "../../../services/CreateOrderService";
import FindOrderByClientId from "../../../services/FindOrderByClientId";

class OrderController {
  
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createOrderService = new CreateOrderService();

    const product = await createOrderService.execute(data);

    return response.json(product);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindOrderByIdService();

    const product = await findOrderService.execute(Number(id));

    return response.json(product);
  }

  async findOrderByClientId(request:Request, response:Response): Promise<Response>{
    const {id} = request.params;

    const findOrderByClientId = new FindOrderByClientId();

    const orders = await findOrderByClientId.execute(Number(id));

    return response.json(orders);
  }

}

export default new OrderController();
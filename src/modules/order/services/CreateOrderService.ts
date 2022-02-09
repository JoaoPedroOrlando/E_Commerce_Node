import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";
import FindProductByIdService from "../../products/services/FindProductByIdService";
import AppError from "../../../shared/errors/AppErrors";
export default class CreateOrderService {
  public async execute(data: IOrderDTO): Promise<Order> {
  
    const orderRepository = new OrderRepository();
    
    data.valor = await this.getTotalPrice(data);
    
    const order = await orderRepository.create(data);

    return order;
  }


  private async getTotalPrice(data: IOrderDTO): Promise<number>{
    
    let values: number[]  = await Promise.all( data.pedido_produtos.map(async (produto): Promise<number> => {
      if (produto.quantidade !== 0){
        const id = produto.produto_id;
        const findProductByService = new FindProductByIdService();
        const product = await findProductByService.execute(id);
        const precoTotal = produto.quantidade * product.preco;
        return precoTotal;
      } else throw new AppError("Pedido com quantidade zero");
    }));

    let valorTotal= 0.0;
    values.forEach( value =>{
      valorTotal += value;
    });
    
    return valorTotal;
  }


}



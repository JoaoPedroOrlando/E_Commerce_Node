import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

import FindProductByIdService from "../../products/services/FindProductByIdService";

import AppError from "../../../shared/errors/AppErrors";

const {checkStok} = require("../validations/StokValidations");

export default class CreateOrderService {
  public async execute(data: IOrderDTO): Promise<Order> {
    
    //faz o controle das quantidades do pedido
    data.pedido_produtos.forEach(element => {
      if (element.quantidade <= 0 || element.quantidade === null){
        throw new AppError("Iligal quantity value ");
      }
    });

    //verifica se ha estoque para os produtos listados
    for (const order of data.pedido_produtos){
      //retorna a quantidade em estoque do produto 
      const quantidadeEstoque = await checkStok(Number(order.produto_id));
      console.log("Quantidade: "+ quantidadeEstoque);

      if (quantidadeEstoque < order.quantidade){
        throw new AppError("Quantidade insuficiente em estoque do produto_id: "+ order.produto_id+ ", "+quantidadeEstoque+" unidades em estoque");
      }
    }
      
    const orderRepository = new OrderRepository();
    
    data.valor = await this.getTotalPrice(data);
      
    const order = await orderRepository.create(data);

    return order;
  }

  //calcula o valor total do pedido
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



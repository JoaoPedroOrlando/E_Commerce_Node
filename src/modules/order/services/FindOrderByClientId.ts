import OrderRepository from "../infra/typeorm/repositories/OrderRepository";
import Order from "../infra/typeorm/entities/Order";

export default class findOrderByClientId{
    public async execute(id:number): Promise< Order[] | undefined >{
        const orderRepository = new OrderRepository();
        const orders = await orderRepository.findOrderByClientId(id);
        return orders;
    }
}
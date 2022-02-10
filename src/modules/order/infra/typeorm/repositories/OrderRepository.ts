import IOrderDTO from "../../../dtos/IOrderDTO";
import IOrderRepository from "../../../repositories/IOrderRepository";
import { getRepository, Repository } from "typeorm";
import Order from "../entities/Order";
import Client from "../../../../clients/infra/typeorm/entities/Client";

export default class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  findOrderByClientId(id: number): Promise<Order[] | undefined> {
    return this.ormRepository
    .createQueryBuilder("order")
    .leftJoinAndSelect("order.pedido_produtos", "pp")
    .leftJoinAndSelect("order.cliente","c")
    .where("order.cliente_id = :id", {id})
    .getMany();
  }

  async findById(id: number): Promise<Order | undefined> {
    return this.ormRepository
      .createQueryBuilder("order")
      .leftJoinAndSelect("order.pedido_produtos", "pp")
      .leftJoinAndSelect("pp.produto", "p")
      .leftJoinAndSelect("order.cliente","c")
      .where("order.id = :id", { id })
      .getOne();
  }

  async create(data: IOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(data);

    return this.ormRepository.save(order);
  }
}
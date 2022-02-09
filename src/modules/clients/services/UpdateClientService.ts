import AppError from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindClientByIdService from "./FindClientByIdService";

const {isCpfValid} = require("../validations/ClientCpfVerify");
const {validatesCpf} = require("../validations/ClientCpfVerify");

export default class UpdateClientService {
  public async execute(data: IClientDTO): Promise<Client> {
    const clientRepository = new ClientRepository();
    const findClientById = new FindClientByIdService();

    if (!data.id) {
      throw new AppError("Atualização precisa do id do cliente");
    }

    await findClientById.execute(data.id);

    //recebe a lista dos clientes
    const clients = await clientRepository.list();

    if (validatesCpf(data.cpf) ){
      if (isCpfValid(data.cpf,clients)){
        const client = await clientRepository.update(data);
        return client;
      } else throw new AppError("Cliente já cadastrado com o CPF informado." );
    } else throw new AppError("CPF invalido.");

  }
}

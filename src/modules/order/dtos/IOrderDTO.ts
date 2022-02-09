import IOrderProductDTO from "./IOrderProductDTO";

export default class IOrderDTO{
    id?: number;
    client_id: string;
    status: string;
    forma_pagamento: string;
    valor?: number;
    desconto?: number;
    data: Date;
    pedido_produtos: IOrderProductDTO[];
}
import FindProductByIdService from "../../products/services/FindProductByIdService";


async function checkStok (id:Number): Promise <Number>{
    const findProductByIdService = new FindProductByIdService();
    const product = await findProductByIdService.execute(Number(id));
    return product.quantidade;
}

module.exports = {checkStok};
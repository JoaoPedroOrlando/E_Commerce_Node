import { Router } from "express";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import categoryRoutes from"../../../../modules/category/infra/http/routes/categoty.routes";
import productsRoutes from"../../../../modules/products/infra/http/routes/products.routes";
import ordersRoutes from "../../../../modules/order/infra/http/routes/orders.routes";
const routes = Router();

routes.use("/clientes", clientsRoutes);
routes.use("/categorias",categoryRoutes);
routes.use("/produtos",productsRoutes);
routes.use("/pedidos",ordersRoutes);
export default routes;

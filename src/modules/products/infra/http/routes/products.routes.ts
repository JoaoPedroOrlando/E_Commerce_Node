import { Router } from "express";
import ProductRepository from "../../typeorm/repositories/ProductRepository";
import ProductsController from "../controllers/ProductsController";

const routes = Router();

/**
 * Define todas as rotas de clientes
 */

routes.post("/", ProductsController.create);

routes.get("/:id", ProductsController.findById);

routes.put("/:id", ProductsController.update);

routes.get("/categorias/:id",ProductsController.findByCategory);

export default routes;

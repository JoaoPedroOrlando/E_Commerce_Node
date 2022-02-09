import {Router} from "express";
import CategoryRepository from "../../typeorm/repositories/CategoryRepository";
import CategoryController from "../controllers/CategoryController";

const routes = Router();

routes.post("/", CategoryController.create);
routes.get("/",CategoryController.list);
routes.get("/:id",CategoryController.findById);
routes.put("/:id",CategoryController.update);
routes.delete("/:id",CategoryController.delete);
export default routes;
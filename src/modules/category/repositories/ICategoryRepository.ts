import { DeleteResult } from "typeorm";
import IClientDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";

export default interface ICategoryRepository {
    create(data: IClientDTO): Promise<Category>;
    list(): Promise<Category[]>;
    findById(id: number): Promise<Category | undefined>;
    update(data: IClientDTO): Promise<Category>;
    delete(id: number): Promise<DeleteResult>;
}
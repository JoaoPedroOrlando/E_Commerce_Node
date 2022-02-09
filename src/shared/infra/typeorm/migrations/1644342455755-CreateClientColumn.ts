import {Column, MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class CreateClientColumn1644342455755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "clientes", 
        new TableColumn({
            name:"cpf",
            type: "varchar",
            isNullable: true,
            isUnique:true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("clientes","cpf");
    }

}

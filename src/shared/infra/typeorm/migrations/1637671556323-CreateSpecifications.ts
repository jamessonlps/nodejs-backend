import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSpecifications1637671556323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specifications",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "area",
                        type: "integer"
                    },
                    {
                        name: "number_of_bathrooms",
                        type: "integer"
                    },
                    {
                        name: "number_of_bedrooms",
                        type: "integer"
                    },
                    {
                        name: "number_of_suites",
                        type: "integer"
                    },
                    {
                        name: "isFurnished",
                        type: "boolean"
                    },
                    {
                        name: "aboutFurniture",
                        type: "text"
                    },
                    {
                        name: "pets",
                        type: "boolean"
                    },
                    {
                        name: "garage",
                        type: "boolean"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("specifications");
    }

}

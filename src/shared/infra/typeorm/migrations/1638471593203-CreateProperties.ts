import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProperties1637611185871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "properties",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "monthly_rate",
                        type: "float"
                    },
                    {
                        name: "available",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "broker",
                        type: "varchar"
                    },
                    {
                        name: "state",
                        type: "varchar"
                    },
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "district",
                        type: "varchar"
                    },
                    {
                        name: "street",
                        type: "varchar"
                    },
                    {
                        name: "number",
                        type: "int"
                    },
                    {
                        name: "complement",
                        type: "varchar"
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
                    }
                ]
            })
        );
    }
        
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("properties");
        }
    }
    
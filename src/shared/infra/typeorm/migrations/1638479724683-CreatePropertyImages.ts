import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePropertyImages1638479724683 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'properties_image',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'property_id',
                        type: 'uuid'
                    },
                    {
                        name: 'image_name',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKPropertyImage',
                        referencedTableName: 'properties',
                        referencedColumnNames: ['id'],
                        columnNames: ['property_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('properties_image');
    }

}

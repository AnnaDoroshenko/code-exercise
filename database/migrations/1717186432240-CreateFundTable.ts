import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFundTable1717186432240 implements MigrationInterface {
    name = 'CreateFundTable1717186432240'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fund" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_b3ac6e413e6e449bb499db1ccbc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fund"`);
    }

}

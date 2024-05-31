import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLegalEntityTable1717187420122 implements MigrationInterface {
    name = 'CreateLegalEntityTable1717187420122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "legal_entity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "totalValue" integer NOT NULL, CONSTRAINT "PK_34a297096a2395e25cafb2a8878" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "legal_entity"`);
    }

}

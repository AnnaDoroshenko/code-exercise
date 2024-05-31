import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCommitmentTable1717188742259 implements MigrationInterface {
    name = 'CreateCommitmentTable1717188742259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "commitment" ("id" SERIAL NOT NULL, "legalEntityId" integer NOT NULL, "fundId" integer NOT NULL, "amount" integer NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_7a0899978d100f72269b3045d7e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "commitment" ADD CONSTRAINT "FK_04f21f337f5241446145a103a61" FOREIGN KEY ("legalEntityId") REFERENCES "legal_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "commitment" ADD CONSTRAINT "FK_1f1196e4aa86a968b7ed4071d86" FOREIGN KEY ("fundId") REFERENCES "fund"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "commitment" DROP CONSTRAINT "FK_1f1196e4aa86a968b7ed4071d86"`);
        await queryRunner.query(`ALTER TABLE "commitment" DROP CONSTRAINT "FK_04f21f337f5241446145a103a61"`);
        await queryRunner.query(`DROP TABLE "commitment"`);
    }

}

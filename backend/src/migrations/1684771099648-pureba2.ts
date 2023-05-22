import { MigrationInterface, QueryRunner } from "typeorm";

export class Pureba21684771099648 implements MigrationInterface {
    name = 'Pureba21684771099648'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account_card_entity" DROP COLUMN "cvv"`);
        await queryRunner.query(`ALTER TABLE "account_card_entity" ADD "cvv" character varying(3) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "account_amount_entity" ALTER COLUMN "amount" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account_amount_entity" ALTER COLUMN "amount" SET DEFAULT '$ 0,00'`);
        await queryRunner.query(`ALTER TABLE "account_card_entity" DROP COLUMN "cvv"`);
        await queryRunner.query(`ALTER TABLE "account_card_entity" ADD "cvv" integer NOT NULL`);
    }

}

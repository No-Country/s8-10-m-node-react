import { MigrationInterface, QueryRunner } from "typeorm";

export class AssociateCards1684812876756 implements MigrationInterface {
    name = 'AssociateCards1684812876756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "business_entity" RENAME COLUMN "date" TO "subject"`);
        await queryRunner.query(`ALTER TABLE "account_card_entity" RENAME COLUMN "numberCard" TO "cardNumber"`);
        await queryRunner.query(`CREATE TABLE "associate_cards_entity" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "cardNumber" character varying NOT NULL, "expiration" TIMESTAMP NOT NULL, "emission" TIMESTAMP, "cvv" character varying(3) NOT NULL, "emisor" character varying NOT NULL, "bank" character varying NOT NULL, CONSTRAINT "UQ_0eea358190f9cb8f2829993d906" UNIQUE ("cardNumber"), CONSTRAINT "PK_6184dc028b79bee9de7c46a0e5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account_user_entity_associate_cards_associate_cards_entity" ("accountUserEntityId" integer NOT NULL, "associateCardsEntityId" integer NOT NULL, CONSTRAINT "PK_ce2fa6138d26ca64abf92eb3124" PRIMARY KEY ("accountUserEntityId", "associateCardsEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1e63db664054e190617d0159d3" ON "account_user_entity_associate_cards_associate_cards_entity" ("accountUserEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_be99c8cb4305505c727153f469" ON "account_user_entity_associate_cards_associate_cards_entity" ("associateCardsEntityId") `);
        await queryRunner.query(`ALTER TABLE "business_entity" DROP COLUMN "subject"`);
        await queryRunner.query(`ALTER TABLE "business_entity" ADD "subject" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "account_card_entity" ADD CONSTRAINT "UQ_9d1afde8846dafcebf21510da42" UNIQUE ("cardNumber")`);
        await queryRunner.query(`ALTER TABLE "account_user_entity" ADD CONSTRAINT "UQ_c57f34bd119fbead1889c6845c9" UNIQUE ("alias")`);
        await queryRunner.query(`ALTER TABLE "account_amount_entity" ALTER COLUMN "amount" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "account_user_entity_associate_cards_associate_cards_entity" ADD CONSTRAINT "FK_1e63db664054e190617d0159d3a" FOREIGN KEY ("accountUserEntityId") REFERENCES "account_user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "account_user_entity_associate_cards_associate_cards_entity" ADD CONSTRAINT "FK_be99c8cb4305505c727153f469b" FOREIGN KEY ("associateCardsEntityId") REFERENCES "associate_cards_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account_user_entity_associate_cards_associate_cards_entity" DROP CONSTRAINT "FK_be99c8cb4305505c727153f469b"`);
        await queryRunner.query(`ALTER TABLE "account_user_entity_associate_cards_associate_cards_entity" DROP CONSTRAINT "FK_1e63db664054e190617d0159d3a"`);
        await queryRunner.query(`ALTER TABLE "account_amount_entity" ALTER COLUMN "amount" SET DEFAULT '$ 0,00'`);
        await queryRunner.query(`ALTER TABLE "account_user_entity" DROP CONSTRAINT "UQ_c57f34bd119fbead1889c6845c9"`);
        await queryRunner.query(`ALTER TABLE "account_card_entity" DROP CONSTRAINT "UQ_9d1afde8846dafcebf21510da42"`);
        await queryRunner.query(`ALTER TABLE "business_entity" DROP COLUMN "subject"`);
        await queryRunner.query(`ALTER TABLE "business_entity" ADD "subject" TIMESTAMP NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_be99c8cb4305505c727153f469"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1e63db664054e190617d0159d3"`);
        await queryRunner.query(`DROP TABLE "account_user_entity_associate_cards_associate_cards_entity"`);
        await queryRunner.query(`DROP TABLE "associate_cards_entity"`);
        await queryRunner.query(`ALTER TABLE "account_card_entity" RENAME COLUMN "cardNumber" TO "numberCard"`);
        await queryRunner.query(`ALTER TABLE "business_entity" RENAME COLUMN "subject" TO "date"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1715709777078 implements MigrationInterface {
    name = 'Initial1715709777078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "email" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "password" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "password" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "email" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "name" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(120) NOT NULL`);
    }

}

import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import Entities from "src/entities";

// export const dataSourceOptions: DataSourceOptions = {
//   type: 'postgres',
//   host:  String(process.env.DATABASE_HOST),
//   port: Number(process.env.DATABASE_PORT),
//   username: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD as string,
//   database: process.env.DATABASE_NAME,
//   // entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: false,
//   // migrations: [`${__dirname}/../db/migrations/*{.ts,.js}`],
//   // migrationsTableName: 'migrations',  
// }

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host:  configService.get<string>('DATABASE_HOST'),
          port: configService.get<number>('DATABASE_PORT'),
          username: configService.get<string>('DATABASE_USER'),
          password: configService.get<string>('DATABASE_PASSWORD'),
          database: configService.get<string>('DATABASE_NAME'),
          entities: [...Entities],
          synchronize: false,
          migrations: [`${__dirname}/config/db/migrations/*{.ts,.js}`],
          migrationsTableName: 'migrations',  
        }
      },
      inject: [ConfigService]
    }),
  ],
})
export class DatabaseModule {}
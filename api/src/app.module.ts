import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import Controllers from './controllers';
import Models from './entities';
import Repositories from './repositories';
import Services from './services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        migrations: [`${__dirname}/../db/migrations/*{.ts,.js}`],
        migrationsTableName: 'migrations',        
      }),
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature(Models),
  ],
  exports: [...Services],
  providers: [
    ...Repositories, 
    ...Services
  ],
  controllers: Controllers,
})
export class AppModule {}

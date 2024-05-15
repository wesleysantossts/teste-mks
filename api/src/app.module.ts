import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import Controllers from './controllers';
import Entities from './entities';
import Services from './services';
import { DataSourceOptions } from 'typeorm';
import { UserModule } from './modules/user.module';
import { DatabaseModule } from './config/db/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
    DatabaseModule,
    UserModule,
  ],
  controllers: [...Controllers],
  // providers: [...Services]
})
export class AppModule {}

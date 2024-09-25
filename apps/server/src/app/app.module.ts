import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerFeatureExpenseModule } from '@hba/server/feature-expense';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      DATABASE_PATH: Joi.string().default('tmp/db.sqlite'),
    }),
  }),
  TypeOrmModule.forRootAsync({
    useFactory: (config: ConfigService) => ({
      type: 'sqlite',
      database: config.get('DATABASE_PATH'),
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
  }),
  ServerFeatureExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

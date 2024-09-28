import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Joi from 'joi';

import { ServerFeatureExpenseModule } from '@hba/server/feature-expense';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      DATABASE_PATH: Joi.string().default(process.env.DATABASE_PATH),
    }),
  }),
  TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'sqlite',
      database: process.env.DATABASE_PATH,
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

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import Joi from 'joi';

import { ServerFeatureExpenseModule } from '@hba/server/feature-expense';
import { ServerFeatureHealthModule } from '@hba/server/feature-health';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // validationSchema: Joi.object({
      //   DATABASE_NAME: Joi.string().default(process.env.DATABASE_NAME),
      //   DATABASE_HOST: Joi.string().default(process.env.DATABASE_HOST),
      //   DATABASE_PORT: Joi.number().default(process.env.DATABASE_PORT),
      //   DATABASE_USERNAME: Joi.string().default(process.env.DATABASE_USERNAME),
      //   DATABASE_PASSWORD: Joi.string().default(process.env.DATABASE_PASSWORD),
      // }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        database: process.env.DATABASE_PATH,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        synchronize: true,
        logging: true,
        autoLoadEntities: true,
      }),
    }),
    ServerFeatureExpenseModule,
    ServerFeatureHealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

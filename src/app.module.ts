import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
})
export class AppModule {}

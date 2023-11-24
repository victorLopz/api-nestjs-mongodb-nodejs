import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://example:password@cluster.dz5htok.mongodb.net',
    ),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
})
export class AppModule {}

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
      'mongodb+srv://viccast14:37U6xJ3fg36mUJ8W@cluster0.dz5htok.mongodb.net',
    ),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
})
export class AppModule {}

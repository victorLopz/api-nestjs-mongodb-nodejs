import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocuments = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  code1: string;

  @Prop()
  code2: string;

  @Prop()
  name: string;

  @Prop()
  modelOrPresentation: string;

  @Prop()
  brand: string;

  @Prop()
  priceSold: number;

  @Prop()
  priceBought: number;

  @Prop({ default: 0 }) 
  stockMin: number;

  @Prop()
  comments: string;

  @Prop({ default: true })
  isVisible: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

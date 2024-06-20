import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  code1: string;

  code2: string;

  @IsNotEmpty()
  name: string;

  modelOrPresentation: string;
  brand: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(1000000)
  @Min(0)
  priceSold: number;

  @IsNotEmpty()
  @IsNumber()
  @Max(1000000)
  @Min(0)
  priceBought: number;

  @IsNotEmpty()
  @IsNumber()
  @Max(1000000)
  @Min(0)
  stockMin: number;
  comments: string;
}
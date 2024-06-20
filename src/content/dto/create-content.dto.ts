import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateContentDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: number;
}

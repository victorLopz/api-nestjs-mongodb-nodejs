import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login-auth.dto';
import {
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class RegisterAuthDto {
  @MinLength(3)
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(8)
  @IsNotEmpty()
  @MaxLength(20)
  password: string;
}

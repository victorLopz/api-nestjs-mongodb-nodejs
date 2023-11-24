import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(userObject: RegisterAuthDto) {
    const { fullName, email, password } = userObject;

    const passwordHash = await hash(password, 10);

    const user = {
      fullName,
      email,
      password: passwordHash,
    };

    return this.userModel.create(user);
  }

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;

    const user = await this.userModel.findOne({ email });

    if (!user) throw new HttpException('User not found', 404);

    const isPasswordValid = await compare(password, user.password);
    console.log(!isPasswordValid);
    if (!isPasswordValid) throw new HttpException('Password is not valid', 400);

    const payload = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    };

    const token = await this.jwtService.signAsync(payload);

    const data = {
      user: user,
      token: token,
    };

    return data;
  }
}

import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserEntity from 'src/entities/user.entity';
import BcryptService from 'src/services/bcrypt.service';

@Injectable()
export default class AuthUtils {
  constructor(private bcryptService: BcryptService) {}

  static async generateCookieToken(user: UserEntity) {
    const token = await this.getJwtToken(user.id);
    const options = {
      expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRES_TIME) * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    const data = JSON.stringify({token});
    const responseObj = {
      cookieToken: token,
      cookieOptions: options,
      cookieData: data,
      user,
    };

    return responseObj;
  }

  static async comparePassword(password: string, passwordSaved: string) {
    return await bcrypt.compare(password, passwordSaved); 
  }

  static async getJwtToken(userId: number) {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET as string, {expiresIn: process.env.JWT_EXPIRES_TIME as string});
  }
}
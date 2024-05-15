import UserService from './user.service';
import { UserDto } from 'src/dtos/user.dto';
import UserEntity from 'src/entities/user.entity';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import BcryptService from './bcrypt.service';

@Injectable()
export default class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService,
  ) {}

  async store(user: UserEntity) {
    const createdUser = await this.userService.store(user);
    if(!createdUser) throw new InternalServerErrorException('Erro ao criar o usuário');
    return createdUser;
  }

  async generateHash(password: string) {
    return await this.bcryptService.hashPassword(password); 
  }
}
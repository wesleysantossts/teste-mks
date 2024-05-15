import { Injectable } from '@nestjs/common';
import UserEntity from 'src/entities/user.entity';
// import AuthService from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    // private readonly authService: AuthService,
  ) {}

  async index(): Promise<any> {
    const users = await this.userRepository.find();
    return {data: users};
  }

  async store(user: UserEntity) {
    // const hash = await this.authService.generateHash(user.password);
    // user.password = hash;
    const createdUser = await this.userRepository.save(user);
    return createdUser;
  }
}
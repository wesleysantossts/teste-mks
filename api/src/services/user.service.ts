import { Injectable } from "@nestjs/common";
import UserRepository from "src/repositories/user.repository";

@Injectable()
export default class UserService {
  constructor(
    private userRepository: UserRepository
  ) {}

  async index(): Promise<any> {
    const users = await this.userRepository.index();
    return {data: users};
  }
}
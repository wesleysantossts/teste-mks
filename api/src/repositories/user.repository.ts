import { InjectRepository } from "@nestjs/typeorm";
import UserEntity from "src/entities/user.entity";
import { Repository } from "typeorm";

export default class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
    super(userRepository.target, userRepository.manager, userRepository.queryRunner);
  }

  async index() {
    return await this.userRepository.find();
  }
}
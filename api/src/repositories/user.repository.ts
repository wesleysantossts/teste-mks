import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from 'src/entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(
    private dataSource: DataSource,
  ) {
    super(
      UserEntity,
      dataSource.createEntityManager()
    );
  }
  
  async index(): Promise<UserEntity[]> {
    console.log('>>>>>>>> TESTE')
    return await this.find();
  }
  
  async findByEmail(email: string): Promise<UserEntity> {
    return this.findOne({where: {email}});
  }
}
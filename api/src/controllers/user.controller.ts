import { Body, Controller, Delete, Get, NotFoundException, Post, Put, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/dtos/user.dto';
import UserEntity from 'src/entities/user.entity';
import UserService from 'src/services/user.service';

@ApiTags('users')
@Controller('users')
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async index(): Promise<{data: UserEntity[]}> {
    const list = await this.userService.index();
    if(list.length === 0) throw new NotFoundException('Nenhum usuário cadastrado');
    return { data: list };
  }

  // @Get(':id')
  // async show(): Promise<any> {}
  // @Post()
  // async store(@Body() user: UserDto): Promise<any> {
  //   // const createdUser = await this.model.save(user);
  //   // return { data: createdUser }; 
  // }
  // @Put(':id')
  // async update(): Promise<any> {}
  // @Delete(':id')
  // async destroy(): Promise<any> {}
}
import { Body, Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UserDto } from 'src/dtos/user.dto';
import UserEntity from 'src/entities/user.entity';
import AuthService from 'src/services/auth.service';
import UserService from 'src/services/user.service';

@ApiTags('auth')
@Controller('/auth')
export default class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get(':id')
  async show(): Promise<any> {}

  @Post()
  async store(
    @Req() req: Request, 
    @Res() res: Response, 
    @Body() user: UserDto
  ): Promise<any> {
    const {
      user: createdUser, 
      cookieToken: token, 
      cookieData, 
      cookieOptions
    }: any = await this.authService.store(user as UserEntity);

    res
      .cookie('@mks', cookieData, cookieOptions)
      .json({data: {token, user: createdUser}});
  }

  @Put(':id')
  async update(): Promise<any> {}
  @Delete(':id')
  async destroy(): Promise<any> {}
}
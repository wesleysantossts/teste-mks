import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('/movies')
export default class MovieController {
  @Get()
  async index(): Promise<any> {}
  @Get('/:id')
  async show(): Promise<any> {}
  @Post()
  async store(): Promise<any> {}
  @Put('/:id')
  async update(): Promise<any> {}
  @Delete('/:id')
  async destroy(): Promise<any> {}
}
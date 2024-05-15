import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MaxLength, MinLength } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'O nome é utilizado para localizar mais facilmente o usuário em alguma listagem ou ser mostrado no perfil',
    example: 'Wesley Santos'
  })
  @IsString()
  @MaxLength(255, {message: 'O nome deve conter no máximo 255 caracteres'})
  name: string;
  @IsEmail()
  @MaxLength(255)
  email: string;
  @IsString()
  @MinLength(6, {message: 'A senha deve ter no mínimo 6 caracteres'})
  @MaxLength(255)
  password: string;
}
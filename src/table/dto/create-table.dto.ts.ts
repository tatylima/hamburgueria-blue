/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty,IsNumber, IsPositive } from 'class-validator';

export class CreateTableDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({
    description: 'O número da mesa',
    example: 1,
  })
  number: number;
}

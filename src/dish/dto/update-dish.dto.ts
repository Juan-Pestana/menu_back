import { PartialType } from '@nestjs/mapped-types';
import { CreateDishDto } from './create-dish.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDishDto extends PartialType(CreateDishDto) {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  img?: string;

  @ApiProperty({ required: false })
  category?: string;

  @ApiProperty({ required: false })
  price?: number;
}

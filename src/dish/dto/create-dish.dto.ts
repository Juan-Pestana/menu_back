import { ApiProperty } from '@nestjs/swagger';

export class CreateDishDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ required: false })
  img: string;

  @ApiProperty()
  category: string;

  @ApiProperty({ required: false })
  price?: number;
}

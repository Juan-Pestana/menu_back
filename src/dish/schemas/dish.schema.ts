import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DishDocument = Dish & Document;

@Schema()
export class Dish {
  // @Prop({ type: Types.ObjectId })
  // _id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  img: string;

  @Prop()
  category: string;

  @Prop()
  price: number;
}

export const DishSchema = SchemaFactory.createForClass(Dish);

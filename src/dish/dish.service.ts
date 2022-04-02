import { Injectable, HttpException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dish } from './schemas/dish.schema';

@Injectable()
export class DishService {
  constructor(@InjectModel('Dish') private readonly dishModel: Model<Dish>) {}

  async create(createDishDto: CreateDishDto): Promise<Dish> {
    const dish = await new this.dishModel(createDishDto);
    return dish.save();
  }

  async findAll(): Promise<Dish[]> {
    const dishes = await this.dishModel.find().exec();
    if (!dishes || !dishes[0]) {
      throw new HttpException('No dishes found', 404);
    }
    return dishes;
  }

  async findOne(id: string): Promise<Dish> {
    const _id = new Types.ObjectId(id);
    const dish = await this.dishModel.findById(_id).exec();
    //console.log(dish);

    if (!dish) {
      throw new HttpException('No dishes found', 404);
    }
    return dish;
  }

  async update(id: string, updateDishDto: UpdateDishDto): Promise<Dish> {
    const _id = new Types.ObjectId(id);
    const dish = await this.dishModel
      .findByIdAndUpdate(_id, updateDishDto, { new: true })
      .exec();
    if (!dish) {
      throw new HttpException('No dish found', 404);
    }
    return dish;
  }

  async remove(id: string) {
    const _id = new Types.ObjectId(id);
    const dish = await this.dishModel.deleteOne({ _id }).exec();
    if (dish.deletedCount === 0) {
      throw new HttpException('No dishes deleted', 404);
    }
    return dish;
  }
}

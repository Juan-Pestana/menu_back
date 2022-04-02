import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DishModule } from './dish/dish.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://miMenu:Tapu-kok0@cluster0.vtklp.mongodb.net/mimenu?retryWrites=true&w=majority',
    ),
    DishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

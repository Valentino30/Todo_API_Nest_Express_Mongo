import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoSchema } from './todo.model';
import { TodosService } from './todos.service';
import { TodosControllers } from './todos.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  controllers: [TodosControllers],
  providers: [TodosService],
})
export class TodosModule {}

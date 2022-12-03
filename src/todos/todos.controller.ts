import {
  Put,
  Get,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';

import { TodosService } from './todos.service';

@Controller('todos')
export class TodosControllers {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getTodos() {
    const todos = await this.todosService.getTodos();
    return todos;
  }

  @Get(':id')
  async getTodo(@Param('id') todoId: string) {
    const todo = await this.todosService.getTodo(todoId);
    return todo;
  }

  @Post()
  async addTodo(@Body('name') name: string) {
    const newTodo = await this.todosService.addTodo(name);
    return newTodo;
  }

  @Put(':id')
  async toggleTodo(@Param('id') todoId: string) {
    const toggledTodo = await this.todosService.toggleTodo(todoId);
    return toggledTodo;
  }

  @Delete(':id')
  async deleteTodo(@Param('id') todoId: string) {
    const successResponse = await this.todosService.deleteTodo(todoId);
    return successResponse;
  }
}

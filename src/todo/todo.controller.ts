import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoElement } from './todo.model';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    findAll(): TodoElement[] {
        return this.todoService.findAll();
    }

    @Get(':id')
    findElement(id: number): TodoElement {
        return this.findElement(id);
    }

    @Post()
    create(@Body() createTodoDto: Omit<TodoElement, 'id'>): TodoElement {
        return this.todoService.create(createTodoDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTodoDto: Partial<TodoElement>): TodoElement {
        return this.todoService.update(+id, updateTodoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): boolean {
        return this.todoService.remove(+id);
    }
}

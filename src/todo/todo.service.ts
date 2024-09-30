import { Injectable } from '@nestjs/common'
import { TodoElement } from './todo.model'
import e from 'express';

@Injectable()
export class TodoService {
    private todos: TodoElement[] = [];

    findAll(): TodoElement[]{
        return this.todos;
    }

    findOne(id: number): TodoElement{
        return this.todos.find(element => element.id == id);
    }

    create(todo: Omit<TodoElement, 'id'>): TodoElement {
        const newToDo: TodoElement = {
            ...todo,
            id: Date.now(),
        }
        this.todos.push(newToDo);
        return newToDo;
    }

    update(id: number, updatedToDo: Partial<TodoElement>): TodoElement {
        const todo = this.findOne(id);
        if(todo) {
            Object.assign(todo, updatedToDo);
        }
        return todo;
    }

    remove(id: number): boolean {
        const index = this.todos.findIndex(element => element.id == id);
        if(index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }
}
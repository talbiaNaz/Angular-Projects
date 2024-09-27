import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor(){
   this.todos=[
      {
        sno:1,
        title:'1st task',
        desc:'doing work ',
        active:true
      },
      {
        sno:2,
        title:'2nd task',
        desc:'work not done ',
        active:true
      }
      ,
      {
        sno:3,
        title:'3rd task',
        desc:'it will take time ',
        active:true
      }
    ]
  }

  ngOnInit(){

  }
  deleteTodo(todo:Todo){
  const index =this.todos.indexOf(todo);
  this.todos.splice(index,1);
  }
 

    addTodo(todo : Todo)
  {
    console.log("Add todo");
    this.todos.push(todo);
  }
}

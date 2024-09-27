import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
@Component({
  selector: 'add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

 title:string='';
 desc:string='';
  todos: any;
  n:number=4;
  onSubmit(){
    const todo={
      sno:this.n,
      title: this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
   this.n = this.n+1;
  }
}

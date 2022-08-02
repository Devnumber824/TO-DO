import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
 @Input() todotest!: Todo;
 @Input() i!:number;
  @Output() tododelete:EventEmitter<Todo> = new EventEmitter();
  @Output() todocheckbox:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todotest:Todo){
   this.tododelete.emit(todotest);
    console.log("onclick has been triggered");
   }
   
   onDone(tododone:Todo){
    console.log("onDone has been triggered");
     this.todocheckbox.emit(tododone);
   }

}

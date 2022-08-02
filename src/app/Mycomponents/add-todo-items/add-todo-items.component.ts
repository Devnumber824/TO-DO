import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo-items',
  templateUrl: './add-todo-items.component.html',
  styleUrls: ['./add-todo-items.component.css']
})
export class AddTodoItemsComponent implements OnInit {
   title!:string;
   Desc!:string;
   @Output() Addtodo:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
     const todo = {
       title:  this.title ,
       desc: this.Desc,
       Active:true
     }
     this.Addtodo.emit(todo);
    //  let temp = document.getElementById("todolist");
    //  console.log(temp);
    //  if(temp!=null)
    //  console.log('this is temp.innertext',temp.innerHTML);
    //  if(temp!=null)
    //  temp.innerHTML="";
    //   temp = document.getElementById("Desc");
    //   if(temp!=null)
    //   temp.innerHTML="";
    form.reset();
  }


}

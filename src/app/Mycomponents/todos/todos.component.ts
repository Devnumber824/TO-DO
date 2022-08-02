import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = 'Pranav Khairnar';
  todos:Todo[] =[]

  constructor() { 
    let temp = localStorage.getItem("todos");
      if(temp==null){
        this.todos = [];
      }else{
        this.todos = JSON.parse(temp);
      }

  }

  ngOnInit(): void {
    
   }
     
   toDoDeletEvent(tododelet:Todo){
      console.log(tododelet);
      let index= this.todos.indexOf(tododelet);
      this.todos.splice(index,1);
      localStorage.setItem("todos",JSON.stringify(this.todos));
   }

   addToDo(Addtodo:Todo){
     console.log(Addtodo);
     if(Addtodo.title==null)
        { let tp = document.getElementById("Erroridtitle");
        if(tp!=null){
          tp.innerHTML="Title can not be empty"};
          this.reset();
          return;}
     this.todos.push(Addtodo);
     localStorage.setItem("todos",JSON.stringify(this.todos));
   }

   toDoDone(tododone:Todo){
    console.log(tododone);
     tododone.Active = !tododone.Active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  reset(){
    setTimeout(()=>{
      let tp = document.getElementById("Erroridtitle");
        if(tp!=null){
          tp.innerHTML=""}
    },3000);

    
  }
   
  

}



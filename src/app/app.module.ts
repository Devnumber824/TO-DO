import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { TodoItemsComponent } from './Mycomponents/todo-items/todo-items.component';
import { AddTodoItemsComponent } from './Mycomponents/add-todo-items/add-todo-items.component';
import { FormsModule } from '@angular/forms';
import { AboutTodoItemsComponent } from './Mycomponents/about-todo-items/about-todo-items.component'
import {HttpClientModule} from  '@angular/common/http';
import { PageNotFoundComponent } from './Mycomponents/page-not-found/page-not-found.component';
//import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    AddTodoItemsComponent,
    AboutTodoItemsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

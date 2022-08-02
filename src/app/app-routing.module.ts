import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTodoItemsComponent } from './Mycomponents/about-todo-items/about-todo-items.component';
import { PageNotFoundComponent } from './Mycomponents/page-not-found/page-not-found.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutTodoItemsComponent },
  { path: '**', pathMatch: 'full', 
  component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

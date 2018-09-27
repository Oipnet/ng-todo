import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosLitsComponent } from './components/todos-lits/todos-lits.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ContactComponent } from './pages/contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosLitsComponent,
    TodosItemComponent,
    MenuComponent,
    TasksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

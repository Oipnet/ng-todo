import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosLitsComponent } from './components/todos-lits/todos-lits.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosLitsComponent,
    TodosItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { CreateTodoComponent } from './component/crud/create-todo/create-todo.component';
import { DeleteTodoComponent } from './component/crud/delete-todo/delete-todo.component';
import { ReadTodoComponent } from './component/crud/read-todo/read-todo.component';
import { UpdateTodoComponent } from './component/crud/update-todo/update-todo.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateTodoComponent,
    DeleteTodoComponent,
    ReadTodoComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

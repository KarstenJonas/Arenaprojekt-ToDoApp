import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { CreateTodoComponent } from './component/create-todo/create-todo.component';
import { DeleteTodoComponent } from './component/delete-todo/delete-todo.component';
import { ReadTodoComponent } from './component/read-todo/read-todo.component';
import { UpdateTodoComponent } from './component/update-todo/update-todo.component';

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
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

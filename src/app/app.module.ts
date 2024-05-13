import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { CreateTodoComponent } from './component/crud/create-todo/create-todo.component';
import { DeleteTodoComponent } from './component/crud/delete-todo/delete-todo.component';
import { ReadTodoComponent } from './component/crud/read-todo/read-todo.component';
import { UpdateTodoComponent } from './component/crud/update-todo/update-todo.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { TodoFormComponent } from './component/crud/todo-form/todo-form.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateTodoComponent,
    DeleteTodoComponent,
    ReadTodoComponent,
    UpdateTodoComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

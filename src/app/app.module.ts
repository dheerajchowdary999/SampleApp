import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TodoComponent } from './todo/todo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {HttpClientModule} from "@angular/common/http";
import { DatabaseComponent } from './database/database.component';
import { AddTaskComponent } from './database/add-task/add-task.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddempComponent } from './employee/addemp/addemp.component';
import { EditaddressComponent } from './employee/editaddress/editaddress.component';
import { EditdetailsComponent } from './employee/editdetails/editdetails.component';
import { EditexperienceComponent } from './employee/editexperience/editexperience.component';
import { EditqualificationComponent } from './employee/editqualification/editqualification.component';
import { EditskillComponent } from './employee/editskill/editskill.component';
import { OutletComponent } from './outlet/outlet.component';
import { arrRouting } from "./app.routing";
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodoComponent,
    CalculatorComponent,
    DatabaseComponent,
    AddTaskComponent,
    EmployeeComponent,
    AddempComponent,
    EditaddressComponent,
    EditdetailsComponent,
    EditexperienceComponent,
    EditqualificationComponent,
    EditskillComponent,
    OutletComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    arrRouting,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

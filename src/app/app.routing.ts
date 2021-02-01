import {RouterModule,Routes} from "@angular/router";
import {DatabaseComponent} from './database/database.component';
import {AddTaskComponent} from './database/add-task/add-task.component';
import { AddempComponent } from './employee/addemp/addemp.component';
import { EditdetailsComponent } from './employee/editdetails/editdetails.component';
import { EditaddressComponent } from './employee/editaddress/editaddress.component';
import { EditexperienceComponent } from './employee/editexperience/editexperience.component';
import { EditqualificationComponent } from './employee/editqualification/editqualification.component';
import { EditskillComponent } from './employee/editskill/editskill.component';
import { EmployeeComponent } from './employee/employee.component';
const arr:Routes=[
  // {path:'database',component:DatabaseComponent},
  // {path:'addTask',component:AddTaskComponent},
  {path : 'employee',component:EmployeeComponent},
  {path : 'addemp',component:AddempComponent},
  {path : 'editdetails',component:EditdetailsComponent},
  {path : 'editaddress',component:EditaddressComponent},
  {path : 'editexperience',component:EditexperienceComponent},
  {path : 'editqualification',component:EditqualificationComponent},
  {path : 'editskill',component:EditskillComponent},
];
export const arrRouting=RouterModule.forRoot(arr);

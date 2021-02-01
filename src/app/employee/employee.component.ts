import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { experience,skill,qualification,permanent,present,registration} from './details';
import { Router } from '@angular/router';
import { EmpService } from './emp.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  flag:boolean=true;
  flag1:boolean=false;
  exp_arr:experience[]=[];
  skill_arr:skill[]=[];
  quali_arr:qualification[]=[];
  permanent_arr:permanent[]=[];
  present_arr:present[]=[];
  reg_arr:registration[]=[];
  constructor(private _data:EmpService ,private _router:Router) { }

  ngOnInit(): void {
    this._data.getAllExp().subscribe((data)=>{
      this.exp_arr=data
    });
    this._data.getAllSkill().subscribe((data)=>{
      this.skill_arr=data
    });
    this._data.getAllQuali().subscribe((data)=>{
       this.quali_arr=data
    });
    this._data.getAllPermanent().subscribe((data)=>{
      this.permanent_arr=data
    });
    this._data.getAllPresent().subscribe((data)=>{
      this.present_arr=data
    });
    this._data.getAllReg().subscribe((data)=>{
      this.reg_arr=data
    });

  }
  onshowclick(){
    this.flag=false;
    this.flag1=true;
  }
  onhideclick(){
    this.flag=true;
    this.flag1=false;
  }
  oneditbasicclick(){
    this._router.navigate(['/editdetails'])

  }
  oneditaddressclick(){
    this._router.navigate(['/editaddress'])

  }
  oneditqualificationclick(){
    this._router.navigate(['/editqualification'])

  }
  oneditexperienceclick(){
    this._router.navigate(['/editexperience'])

  }
  oneditskillclick(){
    this._router.navigate(['/editskill'])

  }
  onaddclick(){

    console.log('hi from add')
    this._router.navigate(['/addemp'])

  }
  ondeleteemp(){

  }
  ondeletequalification(){

  }
  ondeleteexperience(){

  }
  ondeleteskill(){

  }

  }



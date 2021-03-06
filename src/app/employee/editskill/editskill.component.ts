import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
skill:FormGroup;
  constructor(private fb: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.skill=this.fb.group({
      skill_details:this.fb.array([this.skillgroup()]),

    });
  }
  skillgroup(){
    return this.fb.group({
        Id: new FormControl(null,[Validators.required]),
        SkillCat: new FormControl(null,[Validators.required]),
        Skill:new FormControl (null,[Validators.required]),
        SkillLevel: new FormControl (null,[Validators.required]),
        IsCurrent: new FormControl ('yes',[Validators.required]),
        Experience: new FormControl (null,[Validators.required]),


    });
  }

  get skillarray(){
    return<FormArray>this.skill.get('skill_details');
  }
  addskill()
  {
    this.skillarray.push(this.skillgroup());
  }


  deleteskill(index)
  {
  this.skillarray.removeAt(index);
  }


  mySkillReset()
  {
  this.skillarray.reset();
  }

  skillgetang(form):Array<any>{
    return form.controls.skill_details.controls;
  }
  skillduplicate(skill,a): boolean{
  let myskill=this.skillgetang(this.skill);
  let textskill=myskill.filter(data=> data.controls.skill.value==skill && skill!=null)
  if (textskill.length>1 ){
    return true;

  }
  else{
    return false;

  }
  }

  onSaveClick(){
    alert('Saved Successfully')
 console.log(this.skill.value)
 this._router.navigate(['/employee'])
  }


}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { skill,experience,present, permanent, qualification, registration } from '../details';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
age;
flag:boolean=true;
flag1:boolean=false;
flag2:boolean=false;
flag3:boolean=false;
flag4:boolean=false;
Id:string;
   AddressPermanent:String;
  //  svillage:String;
  //  spost_office:String;
  //  smandal:String;
   District:String;
   Pin:String;
   Country:string;
   State:string;
   City:string;
registrationform:FormGroup;
permanent:FormGroup;
present:FormGroup;
qualification:FormGroup;
experience:FormGroup;
skill:FormGroup;
reg_arr:registration[]=[];
quali_arr:qualification[]=[];
exp_arr:experience[]=[];
pre_arr:present[]=[];
per_arr:permanent[]=[];
skill_arr:skill[]=[];
  constructor(private fb: FormBuilder,
    private _router:Router,
    private _data:EmpService) { }

  ngOnInit(): void {
    this.registrationform = new FormGroup({
      EmployeeNo:new FormControl(null,[Validators.required]),
      Name:new FormControl(null,[Validators.required]),
      Title:new FormControl("Mr."),
      FirstName:new FormControl(null,[Validators.required]),
      MiddleName:new FormControl(null,[Validators.required]),
      LastName:new FormControl(null,[Validators.required]),
      Gender:new FormControl("male"),
      DOB:new FormControl(null,[Validators.required]),
      EmployeeAge:new FormControl(null),
      OfficialPhone:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      PersonalMobile:new FormControl (null,[Validators.required,Validators.minLength(10)]),
      // ofc_extn_phn:new FormControl (null,[Validators.required,Validators.minLength(10)]),

      OfficialEmail:new FormControl(null,[Validators.email]),
      PersonalEmail:new FormControl(null,[Validators.required,Validators.email]),
      Fax:new FormControl(null,[Validators.required]),
      PhotoFile:new FormControl(null,[Validators.required]),
      BirthPlace:new FormControl(null,[Validators.required]),
      Religion:new FormControl(null,[Validators.required]),
      Cast:new FormControl(null,[Validators.required]),
      Nationality:new FormControl(null,[Validators.required]),
      VoterId:new FormControl(null,[Validators.required]),
      PAN:new FormControl(null,[Validators.required]),
      Aadhar:new FormControl(null,[Validators.required,Validators.minLength(12)]),
      MaritalStatus:new FormControl(null,[Validators.required]),
      BankName:new FormControl(null,[Validators.required]),
      PaymentType:new FormControl(null,[Validators.required]),
      AccountType:new FormControl(null,[Validators.required]),
      AccountNumber:new FormControl(null,[Validators.required]),
      IFSC:new FormControl(null,[Validators.required]),

  });
//   this.permanent=new FormGroup({
//     address_group:new FormGroup({
//     Id:new FormControl(null,[Validators.required]),
//     AddressPermanent:new FormControl(null,[Validators.required]),
//     // village:new FormControl(null,[Validators.required]),
//     // post_office:new FormControl(null,[Validators.required]),
//     // mandal:new FormControl(null,[Validators.required]),
//     District:new FormControl(null,[Validators.required]),
//     Pin:new FormControl(null,[Validators.required]),
//     Country:new FormControl(null,[Validators.required]),
//     State:new FormControl(null,[Validators.required]),
//     City:new FormControl(null,[Validators.required]),
//     Permanent_address:new FormControl(null),
//   }),
//   // present:new FormGroup({
//     Id:new FormControl(null,[Validators.required]),
//     AddressPermanent:new FormControl(null,[Validators.required]),
//     // present_village:new FormControl(null,[Validators.required]),
//     // presentpost_office:new FormControl(null,[Validators.required]),
//     // present_mandal:new FormControl(null,[Validators.required]),
//     District:new FormControl(null,[Validators.required]),
//     Pin:new FormControl(null,[Validators.required]),
//     Country:new FormControl(null,[Validators.required]),
//     State:new FormControl(null,[Validators.required]),
//     City:new FormControl(null,[Validators.required]),
//   // })
// });


this.permanent=new FormGroup({
  address_group:new FormGroup({
  Id:new FormControl(null,[Validators.required]),
  AddressPermanent:new FormControl(null,[Validators.required]),
  // village:new FormControl(null,[Validators.required]),
  // post_office:new FormControl(null,[Validators.required]),
  // mandal:new FormControl(null,[Validators.required]),
  District:new FormControl(null,[Validators.required]),
  Pin:new FormControl(null,[Validators.required]),
  Country:new FormControl(null,[Validators.required]),
  State:new FormControl(null,[Validators.required]),
  City:new FormControl(null,[Validators.required]),
  Permanent_address:new FormControl(null),
}),

  Id:new FormControl(null,[Validators.required]),
  AddressPermanent:new FormControl(null,[Validators.required]),
  // present_village:new FormControl(null,[Validators.required]),
  // presentpost_office:new FormControl(null,[Validators.required]),
  // present_mandal:new FormControl(null,[Validators.required]),
  District:new FormControl(null,[Validators.required]),
  Pin:new FormControl(null,[Validators.required]),
  Country:new FormControl(null,[Validators.required]),
  State:new FormControl(null,[Validators.required]),
  City:new FormControl(null,[Validators.required]),
});
this.permanent.get('address_group').get('Permanent_address').valueChanges.subscribe((x) => this.setAddress(x, this.permanent.get('address_group').value));
this.permanent.get('address_group').get('Permanent_address').valueChanges.subscribe((t) => this.editAddress(t));




  this.qualification=this.fb.group({
    qualification_details:this.fb.array( [this.qualificationgroup()]),
  });
  this.experience=this.fb.group({
    experience_details:this.fb.array([this.experiencegroup()])

  });
  this.skill=this.fb.group({
    skill_details:this.fb.array([this.skillgroup()]),

  });
  // this.permanent.get('address_group').get('Permanent_address').valueChanges.subscribe((x) => this.setAddress(x, this.permanent.get('address_group').value));
  //   this.permanent.get('address_group').get('Permanent_address').valueChanges.subscribe((t) => this.editAddress(t));
  this.registrationform.get('DOB').valueChanges.subscribe((x)=> this.updateage(x));
}
editAddress(v:boolean){
  if(v==true){
      this.permanent.get('address_group').valueChanges.subscribe((y) => this.setAddress(this.permanent.get('address_group').get('Permanent_address').value, y));//this.editAddress(x, this.empInfo.get('Padd').value));
  }
}setAddress(val:boolean, paddressGrp:FormGroup){
  if(val==true){
    this.Id=paddressGrp['Id'];
    this.AddressPermanent=paddressGrp['AddressPermanent'];
    // this.Village=paddressGrp['village'];
    // this.spost_office=paddressGrp['post_office'];
    // this.smandal=paddressGrp['mandal'];
    this.District=paddressGrp['District'];
    this.Pin=paddressGrp['Pin'];
    this.Country=paddressGrp['Country'];
    this.State=paddressGrp['State'];
    this.City=paddressGrp['City'];
  }
  else{
    this.Id=null;
    this.AddressPermanent=null;
    // this.svillage=null;
    // this.spost_office=null;
    // this.smandal=null;
    this.District=null;
    this.Pin=null;
    this.Country=null;
    this.State=null;
    this.City=null;
  }
}

   qualificationgroup(){
    return this.fb.group({
        Id: new FormControl(null,[Validators.required]),
        Qualification: new FormControl(null,[Validators.required]),
        Institute:new FormControl (null,[Validators.required]),
        PassingYear: new FormControl (null,[Validators.required]),
        Score: new FormControl (null,[Validators.required]),

    });
  }
  get qualiArray()
  {
    return<FormArray>this.qualification.get('qualification_details');

  }
  addqualification()
  {
    this.qualiArray.push(this.qualificationgroup());
  }

  deletequalification(index)
  {
  this.qualiArray.removeAt(index);
  }


  myReset()
  {
  this.qualiArray.reset();
  }

  getang(form):Array<any>{
    return form.controls.qualification_details.controls;
  }
  duplicate(qualification,a): boolean{
  let myarr=this.getang(this.qualification);
  let text=myarr.filter(data=> data.controls.Qualification.value==qualification && qualification!=null)
  if (text.length>1 ){
    return true;

  }
  else{
    return false;
  }
}
experiencegroup(){
  return this.fb.group({
    Id:new FormControl(),
    dategroup:new FormGroup({
      fromdate: new FormControl(null,[Validators.required]),
      todate:new FormControl (null,[Validators.required]
        )},
       [this.fromToDate('fromdate', 'todate').bind(this)] ),

      organisation: new FormControl (null,[Validators.required]),
      experience: new FormControl (null,[Validators.required]),


  });
}
  get experiencearray(){
    return<FormArray>this.experience.get('experience_details');
  }
  addexperience()
  {
    this.experiencearray.push(this.experiencegroup());
  }


  deleteexperience(index)
  {
  this.experiencearray.removeAt(index);
  }


  experienceReset()
  {
  this.experiencearray.reset();
  } Duplicate(fromdate): boolean {
    let myArray = this.expgetang(this.experience);
    let test = myArray.filter(data => data.controls.dategroup.get('todate').value >= fromdate && fromdate != null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }
  }
  Duplicate1(fromdate): boolean {
    let myArray = this.expgetang(this.experience);
    let test = myArray.filter(data => data.controls.dategroup.get('fromdate').value == fromdate && fromdate != null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }
  }
  expgetang(form): Array<any> {
    return form.controls.experience_details.controls;
  }
  fromToDate(fromdate: string, todate: string)
  {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[fromdate];
      let t = group.controls[todate];
      if (f.value > t.value) {
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
  }

  // fromToDate(fromdate: string, todate: string)
  // {
  //   return (group: FormGroup): {[key: string]: any} => {
  //     let f = group.controls[fromdate];
  //     let t = group.controls[todate];
  //     if (f.value > t.value) {
  //       return {
  //         dates: "Date from should be less than Date to"
  //       };
  //     }
  //     return {};
  //   }
  // }
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
  let textskill=myskill.filter(data=> data.controls.Skill.value==skill && skill!=null)
  if (textskill.length>1 ){
    return true;

  }
  else{
    return false;

  }
  }

  onSaveClick(){
    alert('Saved Successfully')
 console.log(this.registrationform.value)
  }
  onNextClick(){
    this.flag=false;
    this.flag1=true;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;

  }
  onBackClick(){
    this.flag=true;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;

  }
//   onSave1Click(){
//     alert('Saved Successfully')
//  console.log(this.permanent.value)

//   }
  onNextClick1(){
    this.flag=false;
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
    this.flag4=false;

  }
  onBack1Click(){
    this.flag=false;
    this.flag1=true;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;

  }
  // onSave2Click(){
  //   alert('Saved Successfully')
  //   console.log(this.qualification.value)

  // }
  onNextClick2(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=true;
    this.flag4=false;

  }
  onBack2Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
    this.flag4=false;

  }
  // onSave3Click(){
  //   alert('Saved Successfully')
  //   console.log(this.experience.value)

  // }
  onNextClick3(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=true;

  }
  onBack3Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=true;
    this.flag4=false;

  }
  onSave4Click(){
    alert('Saved Successfully')
    console.log(this.skill.value)
    this._router.navigate(['/employee'])

  }

  updateage(val:Date){
    var td=new Date();
    var yd=td.getFullYear();
    var bdy=new Date(val).getFullYear();
    var ans=yd-bdy;
    console.log(ans);
    this.age=ans;
    this.registrationform.get('EmployeeAge').setValue(ans);
     }

    //  var today = new Date();
    //  var year= today.getFullYear();
    //  var birthDate= new Date(val).getFullYear();
    //  var a=year-birthDate;
    //  //console.log(a);
    //  //this.age=a;
    //  this.signupForm.get('basicInfo').get('EmpAge').setValue(a);
     onaddclick(){
      this._data.addReg(this.registrationform.value).subscribe(
        (x:any)=>{
          if (x.affectedRows==1) {
            this.reg_arr.push(this.registrationform.value);
            alert('Added Successfully');
          } else {
            if(x.code=='ER_DUP_ENTRY'){
              alert('Duplicate Email')
            }else{
              console.log(x);
            }
          }

        });

      }
      // onSave1Click(){
      //   this._data.addPresent(this.present.value).subscribe(
      //     (x:any)=>{
      //       if (x.affectedRows==1) {
      //         this.reg_arr.push(this.present.value);
      //         alert('Added Successfully');
      //       } else {
      //         if(x.code=='ER_DUP_ENTRY'){
      //           alert('Duplicate Email')
      //         }else{
      //           console.log(x);
      //         }
      //       }

      //     });

      //   }
        onSave1Click(){
          this._data.addPermanent(this.permanent.value).subscribe(
            (x:any)=>{
              if (x.affectedRows==1) {
                this.per_arr.push(this.permanent.value);
                alert('Added Successfully');
              } else {
                if(x.code=='ER_DUP_ENTRY'){
                  alert('Duplicate Email')
                }else{
                  console.log(x);
                }
              }

            });

          }
          onSave3Click(){
            this._data.addExp(this.experience.value).subscribe(
              (x:any)=>{
                if (x.affectedRows==1) {
                  this.exp_arr.push(this.experience.value);
                  alert('Added Successfully');
                } else {
                  if(x.code=='ER_DUP_ENTRY'){
                    alert('Duplicate Email')
                  }else{
                    console.log(x);
                  }
                }

              });

            }
            onSave2Click(){
              this._data.addQuali(this.qualification.value).subscribe(
                (x:any)=>{
                  if (x.affectedRows==1) {
                    this.quali_arr.push(this.qualification.value);
                    alert('Added Successfully');
                  } else {
                    if(x.code=='ER_DUP_ENTRY'){
                      alert('Duplicate Email')
                    }else{
                      console.log(x);
                    }
                  }

                });

              }
              onaddclick1(){
                this._data.addSkill(this.skill.value).subscribe(
                  (x:any)=>{
                    if (x.affectedRows==1) {
                      this.skill_arr.push(this.skill.value);
                      alert('Added Successfully');
                    } else {
                      if(x.code=='ER_DUP_ENTRY'){
                        alert('Duplicate Email')
                      }else{
                        console.log(x);
                      }
                    }

                  });

                }
                onSave1Click1(){
                  this._data.addPresent(this.present.value).subscribe(
                    (x:any)=>{
                      if (x.affectedRows==1) {
                        this.pre_arr.push(this.present.value);
                        alert('Added Successfully');
                      } else {
                        if(x.code=='ER_DUP_ENTRY'){
                          alert('Duplicate Email')
                        }else{
                          console.log(x);
                        }
                      }

                    });

                  }
  }

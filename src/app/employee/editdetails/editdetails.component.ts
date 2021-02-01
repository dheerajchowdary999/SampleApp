import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  registrationform:FormGroup;
  age;
  constructor(private fb: FormBuilder,private _router:Router) { }


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
      Fax:new FormControl(null,[Validators.required]),
      OfficialEmail:new FormControl(null,[Validators.email]),
      PersonalEmail:new FormControl(null,[Validators.required,Validators.email]),
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
  this.registrationform.get('user_dob').valueChanges.subscribe((x)=> this.updateage(x));
  }
  updateage(val:Date){
    var td=new Date();
    var yd=td.getFullYear();
    var bdy=new Date(val).getFullYear();
    var ans=yd-bdy;
    console.log(ans);
    this.age=ans;
     }
     onSaveClick(){
      alert('Saved Successfully')
      console.log(this.registrationform.value)
      this._router.navigate(['/employee'])

    }

}

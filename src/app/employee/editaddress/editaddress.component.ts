
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editaddress',
  templateUrl: './editaddress.component.html',
  styleUrls: ['./editaddress.component.css']
})
export class EditaddressComponent implements OnInit {
  permanent:FormGroup;
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
  constructor(private _router:Router) { }

  ngOnInit(): void {
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

  }
  editAddress(v:boolean){
    if(v==true){
        this.permanent.get('address_group').valueChanges.subscribe((y) => this.setAddress(this.permanent.get('address_group').get('Permanent_address').value, y));//this.editAddress(x, this.empInfo.get('Padd').value));
    }
  }
  onSaveClick(){
    alert('Saved Successfully')
    console.log(this.permanent.value)
    this._router.navigate(['/employee'])

  }
  setAddress(val:boolean, paddressGrp:FormGroup){
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

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})


export class CalculatorComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  ans:number=0;
  constructor() { }
  ngOnInit(): void {
  }


  ADD(){
    this.ans=this.num1+this.num2;
  }
  SUB(){
    this.ans=this.num1-this.num2;
  }
  MUL(){
    this.ans=this.num1*this.num2;
  }
  DIV(){
    this.ans=this.num1/this.num2;
  }

}

export class Todo {
  constructor(public Id:number,
     public Title:string,
     public Status:string ){}
}
export class details {
  constructor(public user_email:string,
    public user_name:number,
     public user_password:string,
     public user_mobile_no:string ){}
}
export class product {
  constructor(public pro_id:string,
     public pro_name:string,
      public pro_price:string ,
      public pro_desc:number,
      public pro_qty:number,
       public pro_mfg:string,
       public pro_image:string){}
}

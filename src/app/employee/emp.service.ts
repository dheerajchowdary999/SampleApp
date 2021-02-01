import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { experience,skill,qualification,permanent,present,registration} from './details';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url:string = 'http://localhost:3000/permanentaddress/';
  url1:string = 'http://localhost:3000/presentaddress/';
  url2:string = 'http://localhost:3000/userinfo/';
  url3:string = 'http://localhost:3000/qualification/';
  url4:string = 'http://localhost:3000/skill/';
  url5:string = 'http://localhost:3000/experience/';

  constructor(private _http:HttpClient) { }
  getAllExp(){
    return this._http.get<experience[]>(this.url5);
  }
  getAllReg(){
    return this._http.get<registration[]>(this.url2);
  }
  getAllSkill(){
    return this._http.get<skill[]>(this.url4);
  }
  getAllPermanent(){
    return this._http.get<permanent[]>(this.url);
  }
  getAllPresent(){
    return this._http.get<present[]>(this.url1);
  }
  getAllQuali(){
    return this._http.get<qualification[]>(this.url3);
  }
  addReg(item:registration){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url2,body,{headers:head});
      }
      // addPresent(item:present){
      //   let body=JSON.stringify(item);
      //   let head=new HttpHeaders().set('Content-Type','application/json');
      //   return this._http.post(this.url1,body,{headers:head});
      //     }
          addPermanent(item:permanent){
            let body=JSON.stringify(item);
            let head=new HttpHeaders().set('Content-Type','application/json');
            return this._http.post(this.url,body,{headers:head});
              }
              addExp(item:experience){
                let body=JSON.stringify(item);
                let head=new HttpHeaders().set('Content-Type','application/json');
                return this._http.post(this.url5,body,{headers:head});
                  }
                  addSkill(item:skill){
                    let body=JSON.stringify(item);
                    let head=new HttpHeaders().set('Content-Type','application/json');
                    return this._http.post(this.url4,body,{headers:head});
                      }
                      addQuali(item:qualification){
                        let body=JSON.stringify(item);
                        let head=new HttpHeaders().set('Content-Type','application/json');
                        return this._http.post(this.url3,body,{headers:head});
                          }
                          addPresent(item:present){
                            let body=JSON.stringify(item);
                            let head=new HttpHeaders().set('Content-Type','application/json');
                            return this._http.post(this.url1,body,{headers:head});
                              }
}


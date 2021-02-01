import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Todo,details,product} from './details'
@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url:string = 'http://localhost:3000/tasks/';
  url1:string = 'http://localhost:3000/products/';
  url2:string = 'http://localhost:3000/user/';

  constructor(private _http:HttpClient) { }
  getAllTasks(){
    return this._http.get<Todo[]>(this.url);
    }
  addtask(item:Todo){
let body=JSON.stringify(item);
let head=new HttpHeaders().set('Content-Type','application/json');
return this._http.post(this.url,body,{headers:head});
  }
  deletetask(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this,this._http.delete(this.url+Id,{headers:head});
  }
  getAllemployee(){
    return this._http.get<details[]>(this.url2);
    }
  addDetails(item:details){
let body=JSON.stringify(item);
let head=new HttpHeaders().set('Content-Type','application/json');
return this._http.post(this.url2,body,{headers:head});
  }
  deleteDetails(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url2+Id,{headers:head});
  }
  getAllproducts(){
    return this._http.get<product[]>(this.url1);
    }
  addProduct(item:product){
let body=JSON.stringify(item);
let head=new HttpHeaders().set('Content-Type','application/json');
return this._http.post(this.url1,body,{headers:head});
  }
  deleteProduct(Id){
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this,this._http.delete(this.url1+Id,{headers:head});
  }
}

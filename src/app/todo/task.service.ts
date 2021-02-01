import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient,HttpHeaders } from "@angular/common/http";
import { TodoList } from './todolist';
import { Product } from './product';
import {Employe} from './employe'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

url:string = 'http://localhost:3000/tasks/';
url1:string = 'http://localhost:3000/products/';
url2:string = 'http://localhost:3000/user/';

  constructor(private _http:HttpClient) { }
  getAllTasks(){
  return this._http.get(this.url);
  }
  addTask(item: TodoList) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: head });
  }
  deleteTask(id) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + id, { headers: head });
  }
  editTask(item: TodoList) {
    let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.url + item.Id, body, { headers: head });
  }
  getAllproduct(){
    return this._http.get(this.url1);
    }
    addproduct(item: Product) {
      let head = new HttpHeaders().set('Content-Type', 'application/json');
      let body = JSON.stringify(item);
      return this._http.post(this.url1, body, { headers: head });
    }
    deleteproduct(pro_id) {
      let head = new HttpHeaders().set('Content-Type', 'application/json');
      return this._http.delete(this.url1 + pro_id, { headers: head });
    }
    editproduct(item: Product) {
      let head = new HttpHeaders().set('Content-Type', 'application/json');
      let body = JSON.stringify(item);
      return this._http.put(this.url1 + item.pro_id, body, { headers: head });
    }
    getAlldetail(){
      return this._http.get(this.url2);
      }
      adddetail(item: Employe) {
        let head = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify(item);
        return this._http.post(this.url2, body, { headers: head });
      }
      deleteDetails(user_email) {
        let head = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url2 + user_email, { headers: head });
      }
      editdetail(item: Employe) {
        let head = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify(item);
        return this._http.put(this.url2 + item.user_email, body, { headers: head });
      }
}

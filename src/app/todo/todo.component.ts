import { Component, OnInit } from '@angular/core';
import { TodoList } from './todolist';
import{Employe} from './employe';
import{Product} from './product';
import { TaskService } from './task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  arrName:string[]=["dheeraj","varun"];
  todolist:TodoList[]=[ ]
  employelist:Employe[]=[ ]
  productlist:Product[]=[ ]

  pro_id:number;
  pro_name:string;
  pro_price:number;
  pro_desc:string;
  pro_qty:number;
  pro_mgf:Date;
  pro_image:string;
  flag:boolean;
  Id:number;
  Title:string
  Status:string;
  user_email:string;
  user_name:string;
  user_password:string;
  user_mobile_no:number;
  constructor( private _data:TaskService) { }

  ngOnInit(): void {
    this._data.getAllTasks().subscribe(
      (data:TodoList[])=>{
        this.todolist=data;
      }
    );
    this._data.getAllproduct().subscribe(
      (data:Product[])=>{
        this.productlist=data;
      }
    );
    this._data.getAlldetail().subscribe(
      (data:Employe[])=>{
        this.employelist=data;
      }
    );
    }
    onDeleteTask(item: TodoList) {
      if (confirm('Are you sure you want to delete?')) {
        this._data.deleteTask(item.Id).subscribe((x: any) => {
          if (x.affectedRows == 1) {
            this.todolist.splice(this.todolist.indexOf(item), 1);
          }
        });
      }
    }
    onEditTask(item: TodoList) {
      if (item.Status == 'done') {
        item.Status = 'pending';
      } else {
        item.Status = 'done';
      }
    }
    onTaskAdd() {
      this._data
      .addTask(new TodoList(this.Id, this.Title, this.Status))
      .subscribe((x) => {
        console.log(x);
        this.todolist.push(new TodoList(this.Id, this.Title, this.Status));
        this.flag = false;
      });
    }
    onDeleteEmp(item: Employe) {
      if (confirm('Are you sure you want to delete?')) {
        this._data.deleteDetails(item.user_email).subscribe((x: any) => {
            this.employelist.splice(this.employelist.indexOf(item), 1);
        });
      }
    }
    onAddEmp() {
      this._data.adddetail(new Employe(this.user_email, this.user_name,this.user_password,this.user_mobile_no))
      .subscribe((x)=>{
        console.log(x);
        this.employelist.push(new Employe(this.user_email, this.user_name,this.user_password,this.user_mobile_no));
      } );

    }
    onDeleteProduct(item: Product) {

      if (confirm('Are you sure you want to delete?')) {
        this._data.deleteproduct(item.pro_id).subscribe((x: any) => {
            this.productlist.splice(this.productlist.indexOf(item), 1);
        });
      }
    }

    onAddProduct() {
      this._data.addproduct(new Product(this.pro_id, this.pro_name, this.pro_price,this.pro_desc,this.pro_qty,this.pro_mgf,this.pro_image))
      .subscribe((x)=>{
        console.log(x);
        this.productlist.push(new Product(this.pro_id, this.pro_name, this.pro_price,this.pro_desc,this.pro_qty,this.pro_mgf,this.pro_image));
      });
    }
  }

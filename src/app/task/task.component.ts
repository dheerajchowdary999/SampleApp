import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}


interface Food {
  value: string;
  viewValue: string;

}

export interface details {


  name: string;
  position: number;
  catagory: string;
  actions: string;
  delete,
  data_type,
  last_updated,

}

const ELEMENT_DATA: details[] = [
  {position: 1, name: 'incident', catagory: 'incident', actions: 'H',delete:'',data_type:'integer',last_updated:'06-01-2021'},
  {position: 2, name: 'insurence', catagory: 'person', actions: 'He',delete:'',data_type:'date',last_updated:'06-01-2021'},
  {position: 3, name: 'covered', catagory: 'incident', actions: 'Li',delete:'',data_type:'string',last_updated:'06-01-2021'},
  {position: 4, name: 'expired', catagory: 'property', actions: 'Be',delete:'',data_type:'string',last_updated:'06-01-2021'},
  {position: 5, name: 'done', catagory: 'individual', actions: 'B',delete:'',data_type:'date',last_updated:'06-01-2021'},

];

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent  {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Details'},

  ];


  displayedColumns: string[] = ['position', 'name','data_type', 'catagory','last_updated', 'actions','delete'];
  dataSource = ELEMENT_DATA;
  flag:boolean=true;
  flag1:boolean=false;
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {

   }

   openEdit(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      height:'400px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openview(): void {
    const dialogRef = this.dialog.open(view, {
      width: '500px',
      height:'400px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  opendelete(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '300px',
      height:'150px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'edit.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'view.html',
})
export class view {

  constructor(
    public dialogRef: MatDialogRef<view>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'delete.html',
})
export class Dialog {

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

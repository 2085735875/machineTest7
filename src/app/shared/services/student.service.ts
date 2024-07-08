import { Injectable } from '@angular/core';
import { Istd } from '../model/std';
import { SnackBarService } from './snack-bar.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  stdArray : Array<Istd> = [
   {
    fname : 'bunty',
    lname : 'patil',
    email : 'bunty77@gmail.com',
    contact : '1234567890',
    id : '12345'
   },
   {
    fname : 'rupesh',
    lname : 'desale',
    email : 'rd77@gmail.com',
    contact : '1234567890',
    id : '12346'
   }

  ]

  constructor(
    private _snak : SnackBarService
  ) { }
  
  fetchAllStudents() :Array<Istd> {
    return this.stdArray
  }

  
  onStudentAdd(obj : Istd){
      this.stdArray.push(obj)
      this._snak.snackBar(`The student name : ${obj.fname} ${obj.lname}  is added successfully in student table !!!`)
  }
  
  onStudentRemove(id : string){
    let isComfirm = confirm(`Do you want to remove this student details item`)
    if(isComfirm){
      let getIndex = this.stdArray.findIndex(std => std.id === id)
      this.stdArray.splice(getIndex,1)
      this._snak.snackBar(`The student with id ${id} is successfully removed.`)
    }
    
  }

  
}

import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArray : Array<Itodo> = [
    {
      tname : 'HTML',
      tid : '122'
    },
    {
      tname : 'CSS',
      tid : '123'
    },
    {
      tname : 'JAVASCRIPT',
      tid : '124'
    }
  ]
  constructor(
    private _snak : SnackBarService
  ) { }

  featchAllTodos():Array<Itodo>{
    return this.todoArray
  }

  addTodo(todo : Itodo){
    this.todoArray.push(todo)
    this._snak.snackBar(`The todo name : ${todo.tname} is added successfully in todo list !!!`)
  }

  removeTodo(id : string){
    let isComfirm = confirm(`Do you want to remove this todo item`)
    if(isComfirm){
    let getIndex = this.todoArray.findIndex(todo => todo.tid === id)
    this.todoArray.splice(getIndex,1)
    this._snak.snackBar(`The todo with id ${id} is successfully removed.`)
  }
 }
}

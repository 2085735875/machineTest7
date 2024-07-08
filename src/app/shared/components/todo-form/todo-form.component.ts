import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm !: FormGroup
  constructor(
    private _todoServ : TodoService,
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.todoForm = new FormGroup({
      tname : new FormControl(null, [Validators.required])
    })
  }

  onTodoAdd(){
    if(this.todoForm.valid){
      // console.log(this.todoForm.value)
      let obj = {...this.todoForm.value , tid : this._uuid.uuid()}
      // console.log(obj)
      this._todoServ.addTodo(obj)
      this.todoForm.reset()
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArr !: Array<Itodo>

  constructor(
    private _todoSer : TodoService
  ) { }

  ngOnInit(): void {
    this.todoArr = this._todoSer.featchAllTodos()
  }

  onRemove(id : string){
    this._todoSer.removeTodo(id)
  }

}

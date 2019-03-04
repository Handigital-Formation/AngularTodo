import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";
import { TodoListData } from "../dataTypes/TodoListData";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private todoList: TodoListData;

  constructor(private todoService: TodoService) {
    todoService.getTodoListDataObservable().subscribe( tdl => this.todoList = tdl );
  }

  ngOnInit() {
  }

}

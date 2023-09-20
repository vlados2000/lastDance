import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../todo-service.service";
import {Todo} from "../../todo";

@Component({
  selector: 'app-get-todos',
  templateUrl: './get-todos.component.html',
  styleUrls: ['./get-todos.component.css']
})
export class GetTodosComponent implements OnInit{
  toDos: Todo[] = [];
  constructor(private toDoService: TodoService) {}
  getAllTodos() {
    this.toDoService.getAllToDos().subscribe(objects => this.toDos = objects)
  }

  deleteToDo(id: number) {
    return this.toDoService
      .deleteToDo(id)
      .subscribe(element => {
        this.getAllTodos();
      });
  }

  getOneToDo(id: number): void {
    this.toDoService.viewToDoPage(id)
  }

  ngOnInit() {
    this.getAllTodos();
  }
}

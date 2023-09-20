import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../../todo-service.service";
import {Todo} from "../../todo";

@Component({
  selector: 'app-get-one-todo',
  templateUrl: './get-one-todo.component.html',
  styleUrls: ['./get-one-todo.component.css']
})
export class GetOneTodoComponent implements OnInit{
  id: string | null = "";
  toDo: Todo = {
    id: 0,
    title: "",
    description: "",
    completed: false
  };
  constructor(private service: TodoService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getOneToDo(this.id)
  }

  getOneToDo(id: string | null) {
    let idNumber = 0;

    if (typeof id === "string") {
      idNumber = Number.parseInt(id)
    }

    this.service.getOneToDoById(idNumber).subscribe(obj => this.toDo = obj)
  }
}

import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TodoService} from "../../todo-service.service";
import {Todo} from "../../todo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  form = this.fb.group({
    title: [''],
    description: [''],
    completed: [false]
  });

  constructor(private todoService: TodoService, private fb: FormBuilder) {
  }


  addToDo() {
    this.todoService.addToDo(this.form.value as Todo).subscribe(element => this.todoService.viewToDoPage(element.id));
  }
}

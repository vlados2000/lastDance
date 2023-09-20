import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Todo} from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = "http://localhost:4000/todo"
  constructor(private http: HttpClient, private router: Router) {
  }

  getAllToDos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  addToDo(toDo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, toDo);
  }

  getOneToDoById(id: number) : Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  deleteToDo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.url}/${id}`);
  }


  viewToDoPage(id: number) : void {
    this.router.navigate(['/get-one-todo', id]);
  }

  viewAllToDos() : void {
    this.router.navigate(['/']);
  }
}

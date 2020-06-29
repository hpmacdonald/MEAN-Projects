import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>("/tasks");
  } 

  getThisTask(taskId: string): Observable<Task> {
    return this.http.get<Task>(`/tasks/${taskId}`);
  }

}



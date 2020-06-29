import { Component, OnInit } from '@angular/core';
import { Task } from './models/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restfulTaskAPI';
  tasks: Task[] = [];
  task: Task;
    
  constructor(private taskService: TaskService) {
    
  }
  ngOnInit() {
    this.taskService.getTasks()
    .subscribe(tasks => {
      console.log(tasks)
    })
  }
}
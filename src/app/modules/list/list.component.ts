import { Component, OnInit } from '@angular/core';
import { ITask, TaskService } from './services/task.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public tasks: Array<ITask> = this.taskService.tasks

  constructor(
    public taskService: TaskService
  ) { 
  }

  ngOnInit(): void {
  }
}

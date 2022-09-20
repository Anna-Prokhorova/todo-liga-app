import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  task = this.taskService.tasks[0]
  selectedValue = this.task.status;

  changeAppereance(): string {
    switch (this.selectedValue) {
      case "regular":
        return 'task _regular';
      case "important":
        return 'task _important';
      case "done":
        return 'task _done';
    }
    return 'task _regular'
  }
}

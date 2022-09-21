import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public selectedValue!: string;
  
  @Input()
    task!: ITask;

  @Output()
  public deleteEvent = new EventEmitter();

  @Output()
  public changeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.selectedValue = this.task.status;
  }
  
  public changeAppereance(): string {
    this.changeEvent.emit(this.selectedValue)
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

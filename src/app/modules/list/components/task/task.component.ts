import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  selectedValue!: string;

  constructor() { }

  @Input()
  task!: ITask;

  @Output()
  public deleteEvent = new EventEmitter();

  @Output()
  public changeEvent = new EventEmitter();

  ngOnInit(): void {
    this.selectedValue = this.task.status;
  }
  

  changeAppereance(): string {
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

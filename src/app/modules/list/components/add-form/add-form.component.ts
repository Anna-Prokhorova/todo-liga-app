import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../services/task.service';

export class Task {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public status: string,
  ) {
  }
}

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  name!: string;
  description!: string;
  status: string = 'regular';

  constructor(
  ) { }

  @Input()
  tasks!: Array<ITask>;
  
  @Output()
  public addEvent = new EventEmitter;

  ngOnInit(): void {
  }

  addTask() {
    const newTask = new Task(this.tasks.length, this.name, this.description, this.status)
    this.name = '';
    this.description = '';
    this.status = 'regular';
    this.addEvent.emit(newTask)
  }
}

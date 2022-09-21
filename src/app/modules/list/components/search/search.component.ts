import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../services/task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  filterValue: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  tasks!: Array<ITask>;

  @Output()
  public searchEvent = new EventEmitter;

  @Output()
  public filterEvent = new EventEmitter;

}

import { Injectable } from '@angular/core';

export interface ITask {
  id: number;
  name: string;
  description: string;
  status: string;
}

@Injectable()
export class TaskService {
  tasks: Array<ITask> = [
    {
      id: 0,
      name: 'Просто задача',
      description:
        'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'regular',
    },
    {
      id: 1,
      name: 'Важная задача',
      description:
        'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'important',
    },
    {
      id: 2,
      name: 'Выполенная задача',
      description:
        'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'done',
    },
  ];

  private searchValue: string = '';
  private filterValue: string = 'default';

  constructor() {}

  public deleteTask(task: ITask): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  public addTask(task: ITask): void {
    this.tasks.push(task);
  }

  public changeStatus(task: ITask, newStatus: string): void {
    task.status = newStatus;
  }

  public searchTasks(): Array<ITask> {
    return this.tasks.filter((t) => {
      return (
        t.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1 && ((t.status === this.filterValue) || (this.filterValue === 'default'))
      );
    });
  }

  public setSearch(value: string) {
    this.searchValue = value;
  }

  public setFilter(value: string) {
    this.filterValue = value;
  }
}

import { Injectable } from '@angular/core';

export interface ITask {
  id: number,
  name: string,
  description: string,
  status: string,
}

@Injectable()
export class TaskService {
  tasks: Array<ITask> = [
    {
      id: 0,
      name: 'Просто задача',
      description: 'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'regular',
    },
    {
      id: 1,
      name: 'Важная задача',
      description: 'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'important',
    },
    {
      id: 2,
      name: 'Выполенная задача',
      description: 'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'done',
    },
  ]
  constructor() { }

  deleteTask(id: number): void {
    this.tasks.splice(id,1)
  }

  addTask(newName: string, newDescription: string, newStatus: string): void{
    this.tasks.push({
      id: this.tasks.length,
      name: newName,
      description: newDescription,
      status: newStatus,
    })
  }

  changeStatus(id: number, newStatus: string): void{
    this.tasks[id].status = newStatus
  }
}

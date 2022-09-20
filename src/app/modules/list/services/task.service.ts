import { Injectable } from '@angular/core';

export interface ITask {
  id: number,
  name: string,
  description: string,
  status: string,
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Array<ITask> = [
    {
      id: 0,
      name: 'Просто задача',
      description: 'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'Обычная',
    },
    {
      id: 1,
      name: 'Важная задача',
      description: 'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'Важная',
    },
    {
      id: 2,
      name: 'Выполенная задача',
      description: 'Довольно-таки интересное описание задачи в несколько строк. Довольно-таки интересное описание задачи в несколько строк',
      status: 'Выполенная',
    },
  ]
  constructor() { }
}

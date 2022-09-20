import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';



@NgModule({
  declarations: [
    ListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TaskService
  ],
  exports: [
    ListComponent,
    TaskComponent
  ]
})
export class ListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    TaskComponent
  ]
})
export class ListModule { }

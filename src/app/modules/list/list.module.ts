import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { TaskComponent } from './components/task/task.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { SearchComponent } from './components/search/search.component';
import { AddFormComponent } from './components/add-form/add-form.component';



@NgModule({
  declarations: [
    ListComponent,
    TaskComponent,
    SearchComponent,
    AddFormComponent
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

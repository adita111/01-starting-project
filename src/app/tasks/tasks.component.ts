import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) name!: string;
@Input({required:true}) userId!: string;
isAddingTask = false;


constructor( public tasksService:TaskService) {

}
  
get selectedUserTasks() {
  return this.tasksService.getUserTasks(this.userId);}

  
  onStartAddTask(){
this.isAddingTask=true;
  }
  onCloseAddTask(){
    this.isAddingTask=false;
  }

 
}

import { Component,input,Input } from '@angular/core';

import { type Task } from './task.model';

import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: false,
  
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  
constructor( public tasksService:TaskService) {

}


  onCompletedTask(){
    
    this.tasksService.removeTask(this.task.id);
  }

}

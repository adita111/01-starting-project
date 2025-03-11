import { Component,input,Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
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

import { Component, Output,EventEmitter, inject, Input } from '@angular/core';

import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: false,
  
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() close = new EventEmitter<void>();

@Input({required:true}) userId!: string;
enteredTitle = '';
enterdSummary = '';
enterdDate = '';

private tasksService= inject(TaskService)

  onCancel(){
this.close.emit();
  }

onSubmit(){
this.tasksService.addTask({
  title:this.enteredTitle,
  summary:this.enterdSummary,
  date:this.enterdDate
},
 this.userId
);
this.close.emit();
}

}

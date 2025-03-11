import { Component, Output,EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() cancel = new EventEmitter<void>();
@Output() add = new EventEmitter<NewTaskData>();
enteredTitle = '';
enterdSummary = '';
enterdDate = '';

private tasksService= inject(TasksService)

  onCancel(){
this.cancel.emit();
  }

onSubmit(){
this.add.emit({title:this.enteredTitle,summary:this.enterdSummary,date:this.enterdDate});
}

}

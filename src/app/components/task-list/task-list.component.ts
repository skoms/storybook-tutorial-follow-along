import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "src/app/models/task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  /**
   * @ignore
   * Component property to define ordering of tasks
   */
  tasksInOrder: Task[] = [];

  @Input() loading = false;

  @Output() onPinTask = new EventEmitter<Event>()

  @Output() onArchiveTask = new EventEmitter<Event>()

  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter( task => task.state === 'TASK_PINNED' ),
      ...arr.filter( task => task.state !== 'TASK_PINNED' ),
    ]
  }
}
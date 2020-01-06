import { Component, OnInit } from '@angular/core';
import { ITask } from './task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: ITask[];

  constructor() { }

  ngOnInit() {

    this.tasks = [
      {
        _id: '1',
        text: 'Eat a bowl of spaghetti',
        complete: false
      },
      {
        _id: '2',
        text: 'Read a book',
        complete: false
      },
      {
        _id: '3',
        text: 'take the dog for a walk',
        complete: false
      }
    ]

  }

}

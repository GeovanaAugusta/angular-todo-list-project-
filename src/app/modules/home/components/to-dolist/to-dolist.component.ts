import { Component, OnInit } from '@angular/core';

// Interfaces
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.scss']
})
export class ToDolistComponent implements OnInit {

  public taskList: Array<TaskList> = [
    { task: "Minha nova task", checked: true },
    { task: "Minha nova task2", checked: false }
  ];

  constructor() {}

  ngOnInit(): void {

  }

  public deleteItemTaskList(index: number) {
    this.taskList.splice(index, 1);
  }

  public deleteAllTaskList() {

    const confirm = window.confirm("Você deseja realmente deletar tudo?")

    if (confirm)
    this.taskList = [];
  }

  public setEmitTaskList(task: string) {
    console.log(task);
    this.taskList.push({task: task, checked: false});


  }

}

import { Component, DoCheck, OnInit } from '@angular/core';

// Interfaces
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.scss']
})
export class ToDolistComponent implements DoCheck {

  // Aqui acontece o contrário, converte-se para um objeto
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() {}

  // Posicionar nas últimas posições os itens marcados como checked, ou seja, concluídos
  ngDoCheck(): void {
    this.setLocalStorage()
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

  public validationInput(task: string, index: number) {

    if (!task.length) {
      const confirm = window.confirm("A tarefa está vazia, deseja deletar?")

    if (confirm)
    this.deleteItemTaskList(index)
  }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((fist, last) => Number(fist.checked) - Number(last.checked))
      // Lembrete: converter para string
      localStorage.setItem("list", JSON.stringify(this.taskList))
  }
  }

}

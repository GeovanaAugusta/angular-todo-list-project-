import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter;

  public addItemTaskList: string = ""

  constructor() {}

  ngOnInit(): void {

  }

  public submitItemTaskList() {
    console.log(this.addItemTaskList);

    // Evita que se consiga adicionar uma nova tarefa apenas com espaço, mágica do trim
    this.addItemTaskList = this.addItemTaskList.trim()

    if (this.addItemTaskList) {
    // Ao apertar o enter, conforme definido no html, o valor da nova tarefa será emitido
    this.emitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = "";
  }

  }

}

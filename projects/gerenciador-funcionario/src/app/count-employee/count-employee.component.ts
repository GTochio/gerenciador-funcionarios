import { Component } from '@angular/core';

@Component({
  selector: 'app-count-employee',
  templateUrl: './count-employee.component.html',
  styleUrls: ['./count-employee.component.css']
})
export class CountEmployeeComponent {
  quantidadeFuncionariosCadastrados: number;
  constructor() {
    this.quantidadeFuncionariosCadastrados = 0;
  }

  ngOnInit(): void {
  }
}

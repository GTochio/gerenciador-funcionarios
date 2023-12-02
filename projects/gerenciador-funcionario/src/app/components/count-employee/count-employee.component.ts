import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-employee',
  templateUrl: './count-employee.component.html',
  styleUrls: ['./count-employee.component.css']
})
export class CountEmployeeComponent {
  @Input()qtEmployees: number;
  constructor() {
    this.qtEmployees = 0;
  }

  ngOnInit(): void {
  }
}

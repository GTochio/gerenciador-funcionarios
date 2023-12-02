import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  qtEmployees: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }
}

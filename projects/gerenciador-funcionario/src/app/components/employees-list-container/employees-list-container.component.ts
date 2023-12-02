import { Component, EventEmitter, Output, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list-container',
  templateUrl: './employees-list-container.component.html',
  styleUrls: ['./employees-list-container.component.css']
})
export class EmployeesListContainerComponent implements OnInit, AfterViewInit{
  employees: String[];

  @Output() qtEmployees = new EventEmitter<number>();

  constructor(private router: Router) {
    this.employees = ['Tochio', 'Marcio', 'Igor', 'Diego', 'André'];
   }

  ngOnInit(): void {

  }

  async ngAfterViewInit() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.qtEmployees.next(this.employees.length);
  }

  handleClick(employees: String){
    this.router.navigateByUrl(`/employees/edit/${employees}`);
  }
}

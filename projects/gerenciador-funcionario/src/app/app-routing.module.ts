import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeesFormComponent } from './pages/employees-form/employees-form.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'employees', pathMatch: 'full'
  },
  {
    path: 'employees', component: EmployeesComponent
  },
  {
    path: 'employees/new', component: EmployeesFormComponent
  },
  {
    path: 'employees/edit/:id', component: EmployeesFormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

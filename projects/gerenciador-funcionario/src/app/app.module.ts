import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonRegisterComponent } from './components/button-register/button-register.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { HeaderComponent } from './components/header/header.component';
import { CountEmployeeComponent } from './components/count-employee/count-employee.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeesFormComponent } from './pages/employees-form/employees-form.component';
import { EmployeesListContainerComponent } from './components/employees-list-container/employees-list-container.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonRegisterComponent,
    HeaderComponent,
    CountEmployeeComponent,
    EmployeesComponent,
    EmployeesFormComponent,
    EmployeesListContainerComponent,
    SubHeaderComponent,
    DialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

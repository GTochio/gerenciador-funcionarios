import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonRegisterComponent } from './button-register/button-register.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HeaderComponent } from './header/header.component';
import { CountEmployeeComponent } from './count-employee/count-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonRegisterComponent,
    SubHeaderComponent,
    HeaderComponent,
    CountEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

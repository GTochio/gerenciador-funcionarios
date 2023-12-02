import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  firstNameHeader: string;
  secondNameHeader: string;
  constructor() {
    this.firstNameHeader = 'Gerenciador';
    this.secondNameHeader = ' Funcionarios';
   }

  ngOnInit(): void {
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-button-register',
  templateUrl: './button-register.component.html',
  styleUrls: ['./button-register.component.css']
})
export class ButtonRegisterComponent {

  constructor() { }

  ngOnInit(): void {
  }

  handleClickButtonRegister() {
    alert('Botão de cadastrar clicado !');
  }

}

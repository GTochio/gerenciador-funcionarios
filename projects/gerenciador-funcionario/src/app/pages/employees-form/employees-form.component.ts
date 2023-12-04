import { Employe } from './../../model/Employe';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit{
[x: string]: any;
  @ViewChild('form') form!: NgForm;

  employe!:Employe
  idEmployees: number = 0;
  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.idEmployees = id);
    if (!this.idEmployees){
      this.employe = new Employe(this.generatedUniqueId(),"","","","","","","")
      return
    };
    alert(this.idEmployees);
  }


  onSubmit() {
    this.dialog.open(DialogComponent, {
      width: '350px',
      height: '300px',
      data: {fnAction: () => this.saveEmploye(), title: `Deseja salvar o funcionario "${this.employe.nome}" ?`, subtitle: 'Esta ação não poderá ser desfeita !'}
    });
  }

  saveEmploye() {
    //Salva o objeto no localStorage
    localStorage.setItem('employe', JSON.stringify(this.employe));
    this.location.back();
  }

  handleCancel() {
    this.location.back();
  }

  generatedUniqueId() {
    return Math.floor(Math.random() * 2525).toString();
  }
  
}

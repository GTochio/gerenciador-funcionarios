import { Component } from '@angular/core';

@Component({
  selector: 'app-departamentos-pesquisa',
  templateUrl: './departamentos-pesquisa.component.html',
  styleUrls: ['./departamentos-pesquisa.component.css']
})
export class DepartamentosPesquisaComponent {
  
  departamentos = [
    {
      id:1,
      nomeDepartamento: "Tecnologia da Informação"
    },
    {
      id:2,
      nomeDepartamento: "Financeiro"
    },
    {
      id:3,
      nomeDepartamento: "Contabilidade"
    },
    {
      id:4,
      nomeDepartamento: "Auditoria Interna"
    },
    {
      id:5,
      nomeDepartamento: "Investimento"
    },
    {
      id:6,
      nomeDepartamento: "Crédito Rural"
    },
    {
      id:7,
      nomeDepartamento: "Analise de Crédito"
    },
    {
      id:8,
      nomeDepartamento: "Processos e Normas"
    },
    {
      id:9,
      nomeDepartamento: "Cartões"
    },
    {
      id:10,
      nomeDepartamento: "Seguros"
    },
    {
      id:11,
      nomeDepartamento: "Planejamento Estratégico"
    }
  ]
}

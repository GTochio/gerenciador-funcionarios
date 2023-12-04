export class Employe {
    identificador! : string;
    status! : string;
    nome!: string;
    cpf!:string;
    cargo!:string;
    dataNascimento!:string
    dataAdmissao!:string
    dataDemissao!:string


    constructor(identificador:string, status:string, nome:string, cpf:string, cargo:string, dtNascimento:string, dtAdmissao:string, dtDemissao:string){
        this.cargo = cargo;
        this.cpf = cpf;
        this.identificador = identificador;
        this.status = status;
        this.nome = nome;
        this.dataAdmissao = dtAdmissao;
        this.dataNascimento = dtNascimento;
        this.dataDemissao = dtDemissao;
    }


}
import { Tipo } from './tipocontato'

export class Contato{
    private nome: string;
    private telefone: string;
    private email: string;
    private aniversario: Date;
    private tipo: Tipo;
    private favorito: boolean = false;

    constructor(nm: string, tel: string, email: string, data: string, tipo: Tipo, fv: boolean){
        this.nome = nm;
        this.telefone = tel;
        this.email = email;
        const [ano, mes, dia] = data.split('-').map(Number);
        this.aniversario = new Date(ano, mes - 1, dia);
        this.tipo = tipo;
        this.favorito = fv;
    
    }
    
    public getNome(): string {
        return this.nome;
    }
    public getTel(): string {
        return this.telefone;
    }
    public getEmail(): string | undefined {
        return this.email;
    }
    public getNiver(): Date | undefined {
        return this.aniversario;
    }
    public getTipo(): Tipo | undefined{
        return this.tipo;
    }
    public getFavorito(): boolean{ 
        return this.favorito;
    }
    public setNome(nome: string): void{
        this.nome = nome;
    }
    public setTel(tel: string): void {
        this.telefone = tel;
    }
    public setEmail(email: string): void{
        this.email = email;
    }
    public setNiver(data: string): void{
        this.aniversario = new Date(data); 
    }
    public setTipo(tipo: Tipo): void{
        this.tipo = tipo;
    }
    public setFavorito(value: boolean){
        this.favorito = value
    }
}


import { Component } from '@angular/core';
import { Contato } from '../contato';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-exibe-favoritos',
  templateUrl: './exibe-favoritos.component.html',
  styleUrl: './exibe-favoritos.component.css'
})
export class ExibeFavoritosComponent {
  contatos: Contato[]

  constructor(public agenda: AgendaService){
    this.contatos = this.agenda.obterFavoritos()
  }
}

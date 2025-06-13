import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent {

    listaUsuarios!: Usuario[];

    constructor( public usuarioService:UsuarioService){

    }
    ngOnInit(){
      this.usuarioService.getUsers().subscribe((items)=>{
        this.listaUsuarios= items;
      })
    }
}

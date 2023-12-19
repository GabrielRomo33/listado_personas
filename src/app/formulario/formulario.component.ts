import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../Persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>()//tiene que ser importado de Angular Core
  nombreInput: string = '';
  ApellidoInput: string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.ApellidoInput);
    this.personaCreada.emit(persona1);

  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../Persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonaComponent } from '../persona/persona.component';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  // @Output() personaCreada = new EventEmitter<Persona>()//tiene que ser importado de Angular Core
  nombreInput: string = '';
  ApellidoInput: string = '';
  // @ViewChild('nombreInput') nombreInput: ElementRef;
  // @ViewChild('ApellidoInput') ApellidoInput: ElementRef;

  constructor(
    private loggingService: LoggingService,
    private personaService:  PersonaService){
      this.personaService.saludar.subscribe(
        (indice: number) => alert(`el indice es ${indice}`)
      );
    }
  ngOnInit(): void {
    
  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.ApellidoInput);
    // this.loggingService.enviaMensajeAConsola(`${persona1.nombre} ${persona1.apellido} esta escuchando: The Outlaw Torn`);
    // this.personaCreada.emit(persona1);
    this.personaService.personaAgregada(persona1);
  }
}

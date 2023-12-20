import { Component, OnInit } from '@angular/core';
import { Persona } from './Persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonaService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Lista de personas';
  personas: Persona[] = [];

  constructor(
    private loggingService: LoggingService,
    private personasService: PersonaService
    ){}
  ngOnInit(): void {
    this.personas = this.personasService.personas; 
  }

}
// personaAgregada(persona: Persona){
//   // this.loggingService.enviaMensajeAConsola(`${persona.nombre} ${persona.apellido} esta escuchando: Outa Get Me`);
//   // this.personas.push(persona);
//   this.personasService.personaAgregada(persona);
// }




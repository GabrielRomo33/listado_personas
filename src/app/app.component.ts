import { Component } from '@angular/core';
import { Persona } from './Persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'lista de personas';
  personas: Persona[] = [
    new Persona('name 1','lastname 1'), 
    new Persona('name 2','lastname 2'),
    new Persona('name 3','lastname 3'),
  ];

  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }
}




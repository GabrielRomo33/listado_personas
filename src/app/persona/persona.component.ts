import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Persona.model';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{
  @Input() persona: Persona;
  @Input() indice: number;
  

  constructor(private personaService: PersonaService){}
  ngOnInit(): void {
    
  }

  

  emitirSaludo(){
    this.personaService.saludar.emit(this.indice);
  }
}

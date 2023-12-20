import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./Persona.model";

@Injectable()//se agrega Injectable para correr un servicio dentro de otro servicio
export class PersonaService{
    personas: Persona[] = [
        new Persona('Cheste','Bennington'), 
        new Persona('Corey','Taylor'),
        new Persona('Kevin','Parker'),
      ];

      saludar = new EventEmitter<number>();

      constructor(private loggingService: LoggingService){}

      personaAgregada(persona: Persona){
        this.loggingService.enviaMensajeAConsola(`${persona.nombre} ${persona.apellido} Esta escuchando Contigo`)
        this.personas.push(persona);
      }
}
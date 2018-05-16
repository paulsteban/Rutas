import {Component} from "@nestjs/common";

@Component()
export class Preguntaservicio {
    arregloPreguntas: Pregunta[] = [];

    agregarPregunta(pregunta: Pregunta): Pregunta[] {
        this.arregloPreguntas.push(pregunta);
        return this.arregloPreguntas;
    }

}

export class Pregunta {
    constructor(public tpregunta: string,
                public trespuesta: string,
                ) {

    }
}
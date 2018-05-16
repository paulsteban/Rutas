import {Controller,Post, Get, Query, Req, Res} from "@nestjs/common";
import {Pregunta} from "../dist/preguntaservicio";



@Controller("Preguntas")
export class AppPreguntasFrecuentesController {

    @Post('crearPreguntas')
    crearPreguntas(
        @Query() queryParametros,
        @Req() request,
        @Res() response
    ) {
        const enviaPregunta = queryParametros.pregunta; // undefined
        const enviaRespuesta = queryParametros.respuesta;



    }
    @Get('verPregutas')
    verPreguntas(@Query() queryParametros){

    }
}
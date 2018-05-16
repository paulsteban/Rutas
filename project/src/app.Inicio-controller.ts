import {Body, Controller, Delete, Get, Headers, Param, Post, Query, Req, Res} from "@nestjs/common";
import {HttpCode} from "@nestjs/common/utils/decorators/http-code.decorator";
const fs = require('fs');
let contador = 0;
@Controller('Inicio')
export class AppInicioController  {
@Get('Home/:pantalla')
@HttpCode(200)
root(@Param() parametros) {
    console.log('Entro al metodo');
    contador++;
    let datosArchivo;
    let html = fs.readFileSync(
        __dirname + '/html/'+parametros.pantalla+'.html',
        'utf8'
    );
  //  html = html.replace('{{variable}}',contador);

    return html; // contenido o un error
}

}
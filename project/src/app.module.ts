import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppInicioController} from "./app.Inicio-controller";
import {AppPreguntasFrecuentesController} from "./app.PreguntasFrecuentes-controller";
import {Preguntaservicio} from "./preguntaservicio";

@Module({
  imports: [],
  controllers: [AppController,AppInicioController,AppPreguntasFrecuentesController],
  providers: [AppService,Preguntaservicio],
})
export class AppModule {}

import { INavigationOption } from './interface';

export enum CategoryOptions {
  EVENTOS_DEPORTIVOS = 'Eventos deportivos',
  EVENTOS_SOCIALES = 'Eventos sociales',
  RESTAURANTE = 'Restaurante'
}

export enum PeriodOptions {
  RECIENTES = 'Mas Recientes',
  ANTIGUOS = 'Mas antiguos'
}

export interface IEventsList {
  Nombre: string;
  Descripcion: string;
  Fecha: string;
  Hora: string;
  Precio: string;
  Image?: string;
  Categoria?: CategoryOptions;
  navigation: INavigationOption;
}

export interface IEventsActions {
  title: string;
  description: string;
  navigation: INavigationOption;
}

import { INavigationOption } from './interface';
import { FamilyType } from './types';

export enum CategoryOptions {
  ALL = 'Todos',
  GOLF = 'Golf',
  BASKETBALL = 'Basquetbol',
  TENNIS = 'Tennis',
  FOOTBALL = 'Fútbol',
  NATACION = 'Natación',
  ATLETISMO = 'Atletismo'
}

export interface ISportsSpacesList {
  Nombre_Deporte: string;
  Descripcion: string;
  availableDays: string;
  Hora_Inicio: string;
  Hora_Fin: string;
  Precio_reserva: string;
  peopleCapacity: number;
  category: string;
  Foto_Caratula?: string;
  navigation: INavigationOption;
  Icono:string;
  Font:string
}

export interface IIconList {
  title: string;
  icon: string;
  iconFamily: FamilyType;
}
export interface ISportsBookingList {
  title: string;
  description: string;
  Fecha_a_Reservar: any;
  fromHour: string;
  toHour: string;
  price: string;
  peopleQuantity: number;
  category: string;
  image?: string;
  navigation: INavigationOption;
}

export interface ISportsEventsList {
  Nombre_Torneo: string;
  Descripcion: string;
  category: string;
  Fecha_Inicio: string;
  Hora_Inicio: string;
  Hora_Fin: string;
  Precio_Inscripcion: string;
  Capacidad: number;
  Arte_Torneo?: string;
  navigation: INavigationOption;
}

// title: string;
//   description: string;
//   category: string;
//   Fecha_Inicio: string;
//   fromHour: string;
//   toHour: string;
//   price: string;
//   peopleQuantity: number;
//   Arte_Torneo?: string;
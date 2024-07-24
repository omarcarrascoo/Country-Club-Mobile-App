import {INavigationOption} from "./interface";
import {CategoryOptions} from "./events";

export enum ProductOptions {
    ALL = 'Todos',
    DESAYUNOS = 'Desayunos',
    BEBIDAS = 'Bebidas',
    ABBAROTES = 'Abarotes',
    BOTIQUIN = 'Botiquin'
}

export interface IRestaurantList {
    Nombre: string;
    Precio: string;
    Descripcion?: string;
    Foto?: string;
    Opciones?: any
}

export interface IRestaurantMenu {
    title: string;
    description: string;
    image?: string;
    count?: number;
}

import {INavigationOption} from "./interface";

export interface IGuestInvitationItem {
    name: string;
    date: string;
    hour: string;
    event: string;
    codigoType: string | null;
}

export interface IRecurringGuestInvitationItem {
    ID: string
    Nombre: any;
    date: string;
    Hora_Ingreso: string;
    event: string;
    codigoType: string | null;
    navigation: any;
}

export interface IInvitationActions {
    title: string;
    description: string;
    navigation: INavigationOption;
}

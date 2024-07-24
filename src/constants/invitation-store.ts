import {IGuestInvitationItem, IInvitationActions, IRecurringGuestInvitationItem} from "../interfaces/invitation";
import {IEventsActions} from "../interfaces/events";

export const InvitationGuestListStore: IGuestInvitationItem[] = [
    {
        name: 'Pedidos Ya',
        date: 'Septiembre 15 de 2023',
        hour: '1:00 PM',
        event: 'Hora de llegada',
        codigoType: null
    },
    {
        name: 'Magdalena de la Cruz',
        date: 'Septiembre 15 de 2023',
        hour: '6:00 PM',
        event: 'Hora de llegada',
        codigoType: null
    },
];

export const RecurringGuestListStore: IRecurringGuestInvitationItem[] = [
    {
        ID: "4386661000003022107",
        Nombre: {display_value:"Porfirio Diaz",last_name:"Porfirio Diaz"},
        date: 'Septiembre 15 de 2023',
        Hora_Ingreso: '6:00 PM',
        event: 'Hora de llegada',
        codigoType: 'Generar QR',
        navigation: {
            stack: 'CreateInvitationRapid',
            screen: 'CreateInvitationRapid'
        }
    },
    {
        ID: "4386661000003022107",
        Nombre: {display_value:"Porfirio Diaz",last_name:"Porfirio Diaz"},
        date: 'Septiembre 15 de 2023',
        Hora_Ingreso: '6:00 PM',
        event: 'Hora de llegada',
        codigoType: 'Generar QR',
        navigation: {
            stack: 'CreateInvitationRapid',
            screen: 'CreateInvitationRapid'
        }
    },
   
];

export const InvitationActionsStore: IInvitationActions[] = [
    {
        title: 'Crear QR de tipo individual',
        description: 'Genera un QR para una visita previa',
        navigation: {
            stack: 'HomeStack',
            screen: 'GenerateQR'
        }
    },
    {
        title: 'Crear invitacion de grupo',
        description: 'Ingresa los datos de un nuevo invitado',
        navigation: {
            stack: 'HomeStack',
            screen: 'CreateInvitationCodigo'
        }
    }
];
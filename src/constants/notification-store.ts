import {IGuestInvitationItem} from "../interfaces/invitation";
import {INotificationItem} from "../interfaces/notification";

export const NotificationListStore: INotificationItem[] = [
    {
        id: 1,
        title: 'Reserva exitosa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        dateTime: '13, Octubre, 1:00 P.M',
        isRead: false
    },
    {
        id: 2,
        title: 'Solicitud recibida',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        dateTime: '13, Octubre, 1:00 P.M',
        isRead: true
    },
    {
        id: 3,
        title: 'Pedido en camino',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        dateTime: '13, Octubre, 1:00 P.M',
        isRead: true
    },
    {
        id: 4,
        title: 'Pago fallido',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        dateTime: '13, Octubre, 1:00 P.M',
        isRead: true
    },
];
import {generalScreenOptions} from "../utils";
import Invitados from "../../../screens/invitados/invitados";
import ChangePassword from "../../../screens/account/screens/change-password/change-password";
import CreateEvent from "../../../screens/events/screens/create-event/create-event";
import CreateInvitationNewVisitor from "../../../screens/invitados/create-invitation-new-visitor/create-invitation-new-visitor";
import CreateInvitationQR from "../../../screens/invitados/create-invitation-qr/create-invitation-qr";
import GenerateQR from "../../../screens/invitados/generate-qr/generate-qr";
import NotificationsList from "../../../components/notifications/notifications-list";

const NotificationStackConfig = [
    {
        title: 'Notificaciones',
        routeName: 'NotificationList',
        hideItem: true,
        component: NotificationsList,
        screenOptions: generalScreenOptions('Notificaciones')
    }
];

export default NotificationStackConfig;

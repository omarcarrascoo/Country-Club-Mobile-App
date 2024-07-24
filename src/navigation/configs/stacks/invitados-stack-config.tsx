import {generalScreenOptions} from "../utils";
import Invitados from "../../../screens/invitados/invitados";
import ChangePassword from "../../../screens/account/screens/change-password/change-password";
import CreateEvent from "../../../screens/events/screens/create-event/create-event";
import CreateInvitationNewVisitor from "../../../screens/invitados/create-invitation-new-visitor/create-invitation-new-visitor";
import CreateInvitationQR from "../../../screens/invitados/create-invitation-qr/create-invitation-qr";
import GenerateQR from "../../../screens/invitados/generate-qr/generate-qr";

const InvitadosStackConfig = [
    {
        title: 'Invitados',
        routeName: 'Invitados',
        hideItem: true,
        component: Invitados,
        screenOptions: generalScreenOptions('Invitados')
    },
    {
        title: 'QR individual',
        routeName: 'CreateInvitationRapid',
        hideItem: true,
        component: CreateInvitationQR,
        screenOptions: generalScreenOptions('Creacion de QR')
    },
    {
        title: 'QR codigo',
        routeName: 'CreateInvitationCodigo',
        hideItem: true,
        // component: CreateInvitationCodigo,
        component: CreateInvitationNewVisitor,
        screenOptions: generalScreenOptions('Creacion de QR')
    },
    {
        title: 'Generar QR',
        routeName: 'GenerateQR',
        hideItem: true,
        component: GenerateQR,
        screenOptions: generalScreenOptions('Generar QR')
    },
];

export default InvitadosStackConfig;

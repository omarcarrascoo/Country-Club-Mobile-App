import Invitados from "../../../screens/invitados/invitados";
import {generalScreenOptions} from "../utils";
import Ayuda from "../../../screens/ayuda/ayuda";

const AyudaStackConfig = [
    {
        title: 'Ayuda',
        routeName: 'Ayuda',
        hideItem: true,
        component: Ayuda,
        screenOptions: generalScreenOptions('Ayuda')
    },
]

export default AyudaStackConfig;
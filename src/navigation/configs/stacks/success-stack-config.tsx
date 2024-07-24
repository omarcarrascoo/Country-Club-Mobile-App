import Ayuda from "../../../screens/ayuda/ayuda";
import {generalScreenOptions} from "../utils";
import Success from "../../../screens/success/success";

const SuccessStackConfig = [
    {
        title: 'Success',
        routeName: 'Success',
        hideItem: true,
        component: Success,
        screenOptions: generalScreenOptions('Success')
    },
]

export default SuccessStackConfig;
import { generalScreenOptions } from '../utils';
import Delivery from "../../../screens/delivery/delivery";
import Invitados from "../../../screens/invitados/invitados";
import RestaurantMenu from "../../../screens/delivery/screens/menu-restaurante/menu-restaurante";
import ProductDetail from '../../../screens/delivery/screens/product-detail/product-detail';
import CartDetail from '../../../screens/delivery/screens/cart-detail/cart-detail';
import DirectionDetail from '../../../screens/delivery/screens/direction-detail/direction-detail';
import PaymentDetail from '../../../screens/delivery/screens/payment-detail/paymentDetail';

const DeliveryStackConfig = [
    {
        title: 'Delivery',
        routeName: 'Delivery',
        hideItem: true,
        component: Delivery,
        screenOptions: generalScreenOptions('Delivery')
    },
    {
        title: 'Menu',
        routeName: 'RestaurantMenu',
        hideItem: true,
        component: RestaurantMenu,
        screenOptions: generalScreenOptions('Menu')
    },
    {
        title: 'Detalles del producto',
        routeName: 'ProductDetail',
        hideItem: true,
        component: ProductDetail,
        screenOptions: generalScreenOptions('Detalles del producto')
    },
    {
        title: 'Carrito',
        routeName: 'CartDetail',
        hideItem: true,
        component: CartDetail,
        screenOptions: generalScreenOptions('Carrito')
    },
    {
        title: 'Dirección',
        routeName: 'DirectionDetail',
        hideItem: true,
        component: DirectionDetail,
        screenOptions: generalScreenOptions('Dirección')
    },
    {
        title: 'Pagos',
        routeName: 'PaymentDetail',
        hideItem: true,
        component: PaymentDetail,
        screenOptions: generalScreenOptions('Pagos')
    },

];

export default DeliveryStackConfig;

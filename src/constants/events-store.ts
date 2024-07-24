import {
  CategoryOptions,
  IEventsActions,
  IEventsList
} from '../interfaces/events';

export const EventsListStore: IEventsList[] = [
  {
    title: 'Aniversario club',
    description: 'Celebra con nosotros 10 años de club',
    date: 'Septiembre 15 de 2023',
    hour: '3:00 PM',
    price: 'Gratis',
    category: CategoryOptions.EVENTOS_DEPORTIVOS,
    image:
      'https://www.tripsavvy.com/thmb/xQ0RP2BZCf46QSV5CiMn7cd1UL4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indian-Wells-57b99cdc5f9b58cdfd90635d.jpg',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  },
  {
    title: 'Torneo de tennis',
    description: 'Masculino y femenino.  Modalidad.',
    date: 'Diciembre 20 de 2023',
    hour: '3:00 PM',
    price: '$ 15 USD',
    category: CategoryOptions.EVENTOS_SOCIALES,
    image:
      'https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/ufqgtgmmdvwrcqavdrhw',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  },
  {
    title: 'Torneo de Golf',
    description: 'En equipos previamente da',
    date: 'Noviembre 5 de 2023',
    hour: '2:00 PM',
    price: '$ 45 USD',
    category: CategoryOptions.EVENTOS_DEPORTIVOS,
    image:
      'https://i0.wp.com/sotapar.com/wp-content/uploads/2021/05/guia-torneo-golf-sota-par.jpeg',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  },
  {
    title: 'Excursion Club',
    description: 'Salida en cady de golf por grupos',
    date: 'Marzo 24 de 2024',
    hour: '2:00 PM',
    price: '$ 45 USD',
    category: CategoryOptions.EVENTOS_SOCIALES,
    image:
      'https://www.colorado.edu/coloradan/sites/default/files/styles/hero/public/article-image/hiking-club-jump-web.jpg?itok=qn8CRmjl',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  },

  {
    title: 'Excursion Club',
    description: 'Salida en cady de golf por grupos',
    date: 'Enero 5 de 2024',
    hour: '2:00 PM',
    price: '$ 45 USD',
    category: CategoryOptions.EVENTOS_DEPORTIVOS,
    image:
      'https://www.colorado.edu/coloradan/sites/default/files/styles/hero/public/article-image/hiking-club-jump-web.jpg?itok=qn8CRmjl',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  },
  {
    title: 'Excursion Club',
    description: 'Salida en cady de golf por grupos',
    date: 'Noviembre 17 de 2023',
    hour: '2:00 PM',
    price: '$ 45 USD',
    category: CategoryOptions.EVENTOS_SOCIALES,
    image:
      'https://www.colorado.edu/coloradan/sites/default/files/styles/hero/public/article-image/hiking-club-jump-web.jpg?itok=qn8CRmjl',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  },
  {
    title: 'Excursion Club',
    description: 'Salida en cady de golf por grupos',
    date: 'Abril 24 de 2023',
    hour: '2:00 PM',
    price: '$ 45 USD',
    category: CategoryOptions.RESTAURANTE,
    image:
      'https://www.colorado.edu/coloradan/sites/default/files/styles/hero/public/article-image/hiking-club-jump-web.jpg?itok=qn8CRmjl',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  },
  {
    title: 'Torneo de tennis',
    description: 'Masculino y femenino. Modalidad.',
    date: 'Diciembre 20 de 2023',
    hour: '3:00 PM',
    price: '$ 15 USD',
    category: CategoryOptions.EVENTOS_SOCIALES,
    image:
      'https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/ufqgtgmmdvwrcqavdrhw',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  },
  {
    title: 'Aniversario club',
    description: 'Celebra con nosotros 10 años de club',
    date: 'Septiembre 8 de 2024',
    hour: '3:00 PM',
    price: 'Gratis',
    category: CategoryOptions.RESTAURANTE,
    image:
      'https://www.tripsavvy.com/thmb/xQ0RP2BZCf46QSV5CiMn7cd1UL4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indian-Wells-57b99cdc5f9b58cdfd90635d.jpg',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventDetail'
    }
  }
];

export const EventsActionStore: IEventsActions[] = [
  {
    title: 'Crear mi propio evento',
    description: 'Personaliza tu propio evento desde cero',
    navigation: {
      stack: 'HomeStack',
      screen: 'EventCreate'
    }
  },
  {
    title: 'Explora eventos de tu club',
    description: 'Reserva tu espacio en un evento del club',
    navigation: {
      stack: 'HomeStack',
      screen: 'ExploreEvents'
    }
  }
];

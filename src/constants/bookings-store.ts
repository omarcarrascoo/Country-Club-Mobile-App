import {
  CategoryOptions,
  ISportsBookingList,
  ISportsEventsList,
  IIconList,
  ISportsSpacesList
} from '../interfaces/sports';
import {ProductOptions} from "../interfaces/products";

export const SportsCategories = [
  {
    id: CategoryOptions.ALL,
    title: CategoryOptions.ALL
  },
  {
    id: CategoryOptions.GOLF,
    title: CategoryOptions.GOLF
  },
  {
    id: CategoryOptions.TENNIS,
    title: CategoryOptions.TENNIS
  },
  {
    id: CategoryOptions.FOOTBALL,
    title: CategoryOptions.FOOTBALL
  },
  {
    id: CategoryOptions.BASKETBALL,
    title: CategoryOptions.BASKETBALL
  },
  {
    id: CategoryOptions.NATACION,
    title: CategoryOptions.NATACION
  },
  {
    id: CategoryOptions.ATLETISMO,
    title: CategoryOptions.ATLETISMO
  }
];

export const SportsSpacesListStore: ISportsSpacesList[] = [
  {
    title: 'Campo de Fútbol',
    description: 'Juego de futbol por equipos de maximo 5 personas',
    availableDays: 'Abierto de lunes a viernes',
    fromHour: '8:00 AM',
    toHour: '6:00 PM',
    price: 'Gratis',
    peopleCapacity: 11,
    category: CategoryOptions.FOOTBALL,
    image:
        'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.performgroup.com%2Fdi%2Flibrary%2FGOAL%2F5b%2Fef%2Fjan-breydel-stadium_jwo0464yk8s517j36es569jht.png%3Ft=821261326?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=210&q=25&w=280&s=4aa798ea8047189ff012dbf22887dc68',
    navigation: {
      stack: 'HomeStack',
      screen: 'SportDetail'
    }
  },
  {
    title: 'Campo de golf',
    description: 'Juego de golf por equipos',
    availableDays: 'Abierto de lunes a viernes',
    fromHour: '11:00 AM',
    toHour: '1:00 PM',
    price: '$ 60 USD',
    peopleCapacity: 7,
    category: CategoryOptions.GOLF,
    image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIi7L7B01deV2IyRpBc1xK-8Vp679-gl9JAw&usqp=CAU',
    navigation: {
      stack: 'HomeStack',
      screen: 'SportDetail'
    }
  },
  {
    title: 'Campo de tennis',
    description: 'Juego de tennis campeonato',
    availableDays: 'Abierto de lunes a jueves',
    fromHour: '03:30 PM',
    toHour: '5:00 PM',
    price: '$ 38 USD',
    peopleCapacity: 5,
    category: CategoryOptions.TENNIS,
    image:
        'https://fessendensummercamps.org/wp-content/uploads/2017/11/Good-TennisVolley-e1511904024210.jpg',
    navigation: {
      stack: 'HomeStack',
      screen: 'SportDetail'
    }
  }
];

export const BookingsListStore: ISportsBookingList[] = [
  {
    title: 'Fútbol Sala',
    description: 'Juego de futbol por equipos de maximo 5 personas',
    date: '2023-10-25',
    fromHour: '3:00 PM',
    toHour: '4:00 PM',
    price: 'Gratis',
    peopleQuantity: 11,
    category: 'Fútbol',
    image:
        'https://www.colsubsidio.com/hs-fs/hubfs/img/bloc/cancha-de-futbol.jpg?width=730&height=360&name=cancha-de-futbol.jpg',
    navigation: {
      stack: 'HomeStack',
      screen: 'SportDetail'
    }
  },
  {
    title: 'Campo de Golf',
    description: 'Juego de golf por equipos',
    date: '2023-11-06',
    fromHour: '11:00 AM',
    toHour: '1:00 PM',
    price: '$ 60 USD',
    peopleQuantity: 7,
    category: 'Golf',
    image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golfer_swing.jpg/1200px-Golfer_swing.jpg',
    navigation: {
      stack: 'HomeStack',
      screen: 'SportDetail'
    }
  },
  {
    title: 'Tennis',
    description: 'Juego de tennis campeonato',
    date: '2023-12-14',
    fromHour: '03:00 PM',
    toHour: '5:00 PM',
    price: '$ 38 USD',
    peopleQuantity: 2,
    category: 'Tennis',
    image:
        'https://www.usta.com/content/dam/usta/Articles/article-desktop/ntrp-header-1170x585.jpg.thumb.585.1170.png',
    navigation: {
      stack: 'HomeStack',
      screen: 'SportDetail'
    }
  }
];

export const ProductListStore: any = [
  {
    title: ProductOptions.DESAYUNOS,
    icon: 'dribbble',
    iconFamily: 'entypo'
  },
  {
    title: ProductOptions.BEBIDAS,
    icon: 'dribbble',
    iconFamily: 'entypo'
  },
  {
    title: ProductOptions.ABBAROTES,
    icon: 'dribbble',
    iconFamily: 'entypo'
  },
  {
    title: ProductOptions.BOTIQUIN,
    icon: 'dribbble',
    iconFamily: 'entypo'
  },
]

export const SportsListStore: IIconList[] = [
  {
    title: CategoryOptions.BASKETBALL,
    icon: 'dribbble',
    iconFamily: 'entypo'
  },
  {
    title: CategoryOptions.TENNIS,
    icon: 'network',
    iconFamily: 'entypo'
  },
  {
    title: CategoryOptions.FOOTBALL,
    icon: 'futbol-o',
    iconFamily: 'Font-Awesome'
  },
  {
    title: CategoryOptions.GOLF,
    icon: 'eercast',
    iconFamily: 'Font-Awesome'
  }
];

export const SportsEventsStore: ISportsEventsList[] = [
  {
    Nombre_Torneo: 'Torneo de golf',
    Descripcion: 'Torneo de Golf del año',
    category: CategoryOptions.GOLF,
    Fecha_Inicio: '01 de Junio de 2024',
    Hora_Inicio: '10:00 AM',
    Hora_Fin: '11:15 AM',
    Precio_Inscripcion: '$ 20.00',
    peopleQuantity: 8,
    image:
        'https://surreyfirefighters.com/wp-content/uploads/2023/09/Golf-Package-2024-2-pdf.jpg',
    navigation: {
      stack: 'HomeStack',
      screen: 'TournamentDetail'
    }
  },
  {
    title: 'Torneo de futbol',
    description: 'Torneo de Futbol del año',
    category: CategoryOptions.FOOTBALL,
    date: '01 de Diciembre de 2023',
    fromHour: '1:00 PM',
    toHour: '3:00 PM',
    price: 'Gratis',
    peopleQuantity: 11,
    image:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/football-tournament-design-template-88bf6a98d5527a8e4fac7b44733339a0_screen.jpg?ts=1616856459',
    navigation: {
      stack: 'HomeStack',
      screen: 'TournamentDetail'
    }
  },
  {
    title: 'Torneo de tennis',
    description: 'Torneo de tennis del año',
    category: CategoryOptions.TENNIS,
    date: '11 de Marzo de 2023',
    fromHour: '2:00 PM',
    toHour: '6:00 PM',
    price: '$ 35 USD',
    peopleQuantity: 4,
    image:
        'https://as1.ftcdn.net/v2/jpg/02/14/05/60/1000_F_214056007_j0OfGRCjFCwm2FbxjRyVaIkqqjsyHEmr.jpg',
    navigation: {
      stack: 'HomeStack',
      screen: 'TournamentDetail'
    }
  }
];
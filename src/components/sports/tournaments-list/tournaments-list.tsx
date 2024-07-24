import React, { FC, useContext, useEffect, useState } from 'react';
import ClubTitleCard from '../../general/title-card/title-card';
import { Block } from 'galio-framework';
import { heightScreen } from '../../../constants/utils';
import { ScrollView } from 'react-native';
import { ClubHorizontalCard } from '../../card/horizontal-card/horizontal-card';
import { ClubemberTheme } from '../../../constants';
import {
  CategoryOptions,
  ISportsEventsList
} from '../../../interfaces/sports';
import Tabs from '../../menu/tabs/tabs';
import { SportsCategories } from '../../../constants/bookings-store';
import ClubInfoText from '../../general/info-text/info-text';
import { getTournaments } from '../../../redux/sportsRedux';
import ClubContext from '../../../context/context';
import ClubTitle from '../../general/title/title';

interface ITournamentsListSection {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  route: any;
  events: ISportsEventsList[];
}
const TournamentsListSection: FC<
  ITournamentsListSection
> = ({
  white = false,
  navigation,
  title,
  route,
  events
}) => {
  const [eventsList, setEventsList] = useState(events);
  const [tournaments, setTournaments] = useState([])
  const {onLoading, state} = useContext(ClubContext)
  const [activeCategory, setActiveCategory] = useState(
    route?.params?.title
      ? route.params.title
      : CategoryOptions.ALL
  );

  useEffect(() => {
    let filtered = events;
    if (activeCategory !== CategoryOptions.ALL) {
      filtered = events.filter(
        (card) => card.category === activeCategory
      );
    }
    setEventsList(filtered);
  }, [activeCategory]);

  useEffect(()=>{
    onLoading(true);
    const setAllSportsData = async () =>{
      const tournamentsData:any = await getTournaments()
      await setTournaments(tournamentsData)
      onLoading(false);
    }
    setAllSportsData()
  }, [])
  return (
    <Block
      flex
      style={[
        {
          paddingBottom: ClubemberTheme.SIZES.BASE_SECURE
        }
      ]}
    >
      <ClubTitle style={{fontSize: ClubemberTheme.SIZES.BASE * 1.2, marginVertical: 20}}>
        {title}
      </ClubTitle>

      {/* <Block>
        <Tabs
          active={activeCategory}
          data={SportsCategories}
          onChange={(category: CategoryOptions) =>
            setActiveCategory(category)
          }
        />
      </Block> */}

      <Block
        flex
        style={{
          maxHeight: heightScreen / 1.5
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
          {!eventsList.length && (
            <Block center middle flex row>
              <ClubInfoText
                size={ClubemberTheme.SIZES.BASE * 0.875}
                style={{
                  textAlign: 'center',
                  paddingVertical:
                    ClubemberTheme.SIZES.BASE_SECURE * 12,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center'
                }}
              >
                No se encuentran torneos o eventos para este
                deporte
              </ClubInfoText>
            </Block>
          )}

          {!!eventsList.length && (
            <Block
              row
              space="between"
              style={{
                gap: ClubemberTheme.SIZES.BASE_SECURE / 2,
                flexWrap: 'wrap'
              }}
            >
              {tournaments?.map((item:any, index:any) => {
                return (
                  <ClubHorizontalCard
                    key={index}
                    location={'Casa Club'}
                    white={white}
                    date={item.Fecha_Inicio}
                    description={item.Descripcion}
                    price={item.Precio_Inscripcion}
                    hour={`${item.Hora_Inicio} - ${item.Hora_Fin}`}
                    title={item.Nombre_Torneo}
                    image={item.Arte_Torneo}
                    action={() =>
                      navigation.navigate(
                        item.navigation.stack,
                        {
                          screen: item.navigation.screen,
                          params: { ...item }
                        }
                      )
                    }
                  />
                );
              })}
            </Block>
          )}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default TournamentsListSection;

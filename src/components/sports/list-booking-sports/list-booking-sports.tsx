import React, { FC, useContext, useEffect, useState } from 'react';
import ClubTitleCard from '../../general/title-card/title-card';
import { Block } from 'galio-framework';
import { heightScreen } from '../../../constants/utils';
import { ScrollView } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { ISportsSpacesList } from '../../../interfaces/sports';
import { CategoryOptions } from '../../../interfaces/sports';
import { ClubHorizontalCard } from '../../card/horizontal-card/horizontal-card';
import Tabs from '../../menu/tabs/tabs';
import ClubInfoText from '../../general/info-text/info-text';
import { SportsCategories } from '../../../constants/bookings-store';
import ClubContext from '../../../context/context';

interface IListBookingSports {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  route: any;
  events: ISportsSpacesList[];
}
const ListBookingSports: FC<IListBookingSports> = ({
  white = false,
  route,
  navigation,
  title,
  events
}) => {
  
  const [sportsList, setSportsList] = useState(events);
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(
    route?.params?.Nombre_Deporte
      ? route.params.Nombre_Deporte
      : CategoryOptions.ALL
  );
  const filterSport = async () =>{
    try {
      let filtered = events;
      
      if (activeCategory !== CategoryOptions.ALL) {
      filtered = events.filter(
        (card) => card.Nombre_Deporte === activeCategory
      );
    }
      await setSportsList(filtered);
    } catch (error) {
      console.log(error);
      
    }
  }
const setCategoriesOptions = () =>{
  const nameOfCategories:any = events.map(obj => obj.Nombre_Deporte);
  setCategories(nameOfCategories)
  console.log(CategoryOptions);
  
}
  useEffect(() => {
    setCategoriesOptions()
    filterSport()
  }, [events, activeCategory]);

  
  return (
    <Block
      flex
      style={[
        {
          paddingBottom: ClubemberTheme.SIZES.BASE_SECURE
        }
      ]}
    >
      <ClubTitleCard flex white={white}>
        {title}
      </ClubTitleCard>

      <Block>
        {/* <Tabs
          active={activeCategory}
          data={events}
          onChange={(category: CategoryOptions) =>
            setActiveCategory(category)
          }
        /> */}
      </Block>

      <Block
        flex
        style={{
          maxHeight: heightScreen / 1.35
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
          {!sportsList.length && (
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
                No se encuentran espacios para este deporte
              </ClubInfoText>
            </Block>
          )}

          {!!sportsList.length && (
            <Block
              flex
              row
              space="between"
              style={{
                gap: ClubemberTheme.SIZES.BASE_SECURE / 2,
                flexWrap: 'wrap'
              }}
            >
              {sportsList?.map((item, index) => {
                return (
                  <ClubHorizontalCard
                    key={index}
                    white={white}
                    date={item.Descripcion}
                    description={item.Descripcion}
                    price={item.Precio_reserva}
                    hour={`${item.Hora_Inicio} - ${item.Hora_Fin}`}
                    title={item.Nombre_Deporte}
                    image={item.Foto_Caratula}
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

export default ListBookingSports;

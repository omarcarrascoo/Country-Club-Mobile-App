import React, { FC } from 'react';
import ClubTitleCard from '../../general/title-card/title-card';
import { ScrollView } from 'react-native';
import { Block } from 'galio-framework';
import ClubMediumCard from '../../card/medium-card/medium-card';
import { ClubemberTheme } from '../../../constants';
import { ISportsSpacesList } from '../../../interfaces/sports';

interface IPreferenceBookings {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: ISportsSpacesList[];
}
const PreferenceBookings: FC<IPreferenceBookings> = ({
  white = false,
  navigation,
  title,
  style,
  events
}) => {
  return (
    <Block
      flex
      style={[
        {
          paddingBottom: ClubemberTheme.SIZES.BASE_SECURE,
          ...style
        }
      ]}
    >
      <ClubTitleCard flex white={white}>
        {title}
      </ClubTitleCard>
      <Block flex>
        <ScrollView horizontal={true}>
          <Block
            flex
            row
            style={{
              gap: ClubemberTheme.SIZES.BASE_SECURE / 2
            }}
          >
            {events.map((item, index) => {
              return (
                <ClubMediumCard
                  key={index}
                  white={white}
                  date={item.availableDays}
                  price={item.Precio_reserva}
                  peopleQuantity={`${item.peopleCapacity} personas`}
                  hourRange={`${item.Hora_Inicio} - ${item.Hora_Fin}`}
                  title={item.Nombre_Deporte}
                  image={item.Foto_Caratula}
                  justified
                  buttonLabel={'Reservar -->'}
                  buttonAction={() =>
                    navigation.navigate(
                      item.navigation.stack,
                      {
                        screen: item.navigation.screen,
                        params: { ...item }
                      }
                    )
                  }
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
        </ScrollView>
      </Block>
    </Block>
  );
};

export default PreferenceBookings;

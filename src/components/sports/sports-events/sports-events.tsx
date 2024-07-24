import React, { FC } from 'react';
import ClubTitleCard from '../../general/title-card/title-card';
import { ScrollView } from 'react-native';
import { Block } from 'galio-framework';
import ClubMediumCard from '../../card/medium-card/medium-card';
import { ClubemberTheme } from '../../../constants';
import { ISportsEventsList } from '../../../interfaces/sports';

interface ISportsEvents {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: ISportsEventsList[];
}
const SportsEvents: FC<ISportsEvents> = ({
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
      <ClubTitleCard
        flex
        white={white}
        withAction
        onPressAction={() =>
          navigation.navigate('HomeStack', {
            screen: 'TournamentEvents'
          })
        }
      >
        {title}
      </ClubTitleCard>
      <Block flex>
        <ScrollView horizontal={true}>
          <Block
            flex
            row
            style={{
              gap: ClubemberTheme.SIZES.BASE_SECURE / 2,
            }}
          >
            {events.map((item, index) => {
              return (
                <ClubMediumCard
                  key={index}
                  white={white}
                  date={item.Fecha_Inicio}
                  hourRange={`${item.Hora_Inicio.slice(0,-3)} - ${item.Hora_Fin.slice(0,-3)}`}
                  title={item.Nombre_Torneo}
                  image={item.Arte_Torneo}
                  buttonLabel={'Inscribirse -->'}
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

export default SportsEvents;

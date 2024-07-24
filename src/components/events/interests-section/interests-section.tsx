import React, { FC } from 'react';
import ClubTitleCard from '../../general/title-card/title-card';
import { ScrollView, Text } from 'react-native';
import { Block } from 'galio-framework';
import ClubMediumCard from '../../card/medium-card/medium-card';
import { IEventsList } from '../../../interfaces/events';
import { ClubemberTheme } from '../../../constants';
import ClubInfoText from '../../general/info-text/info-text';
import { widthScreen } from '../../../constants/utils';

interface IInterestsSection {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: any;
}
const InterestsSection: FC<IInterestsSection> = ({
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
              gap: ClubemberTheme.SIZES.BASE_SECURE / 2,
            }}
          >
            {events?.length > 0 ?(
              events?.map((item:any, index:any) => {
                return (
                  <ClubMediumCard
                    key={index}
                    white={white}
                    date={item.Fecha}
                    description={item.Descripcion}
                    price={item.Precio}
                    hour={item.Hora}
                    title={item.Nombre}
                    image={item.Image}
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
              })
            ):(
              <Block  space='around'>
                <ClubInfoText style={{maxWidth:widthScreen}}>Por el momento no hay intereses que mostrarte.</ClubInfoText>
                <ClubInfoText style={{maxWidth:widthScreen, color:ClubemberTheme.COLORS.DEFAULT}}>Vuelve mas Tarde.</ClubInfoText>
              </Block>
            )
            }
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default InterestsSection;

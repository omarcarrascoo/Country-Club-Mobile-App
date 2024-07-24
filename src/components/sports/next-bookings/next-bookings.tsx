import React, { FC } from 'react';
import { Block } from 'galio-framework';
import ClubTitleCard from '../../general/title-card/title-card';
import ClubLargeCard from '../../card/large-card/large-card';
import { ScrollView } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { ISportsBookingList } from '../../../interfaces/sports';
import ClubInfoText from '../../general/info-text/info-text';

interface INextBookings {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: any;
  reloadAction?: any;
}
const NextBookings: FC<INextBookings> = ({
  title,
  navigation,
  white = false,
  style,
  events,
  reloadAction
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
        reloadComponent={true}
        flex
        withAction
        white={white}
        onPressAction={reloadAction}
      >
        {title}
      </ClubTitleCard>

      <Block
        flex
        style={{
          minHeight:ClubemberTheme.SIZES.BASE_SECURE*14,
          maxHeight: ClubemberTheme.SIZES.BASE_SECURE * 14,
          backgroundColor: ClubemberTheme.COLORS.BACKGROUND_LIGHT,
          padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
          borderRadius: 10
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
          {events?.length > 0 ? (events?.map((item:any, index:any) => {
            return (
              <ClubLargeCard
                key={index}
                white={white}
                title={item.Deportes?.display_value}
                subtitle={item.Fecha_a_Reservar}
                description={`${item["Deportes.Hora_Inicio"]} - ${item["Deportes.Hora_Fin"]}`}

                action={() => {
                  navigation.navigate('HomeStack', {
                    screen: 'HistoryBookingSports'
                  })
                }}
              />
            );
          })):(
            <ClubInfoText style={{marginTop:ClubemberTheme.SIZES.BASE_SECURE * 4}}>Por el momento no tenemos eventos que mostrarte. Vuelve mas tarde</ClubInfoText>
          )}
        </ScrollView>
      </Block>
    </Block>
  );
};

export default NextBookings;

import React, { FC } from 'react';
import { Block } from 'galio-framework';
import ClubTitleCard from '../../general/title-card/title-card';
import ClubLargeCard from '../../card/large-card/large-card';
import { ScrollView, Text } from 'react-native';
import { IEventsList } from '../../../interfaces/events';
import { ClubemberTheme } from '../../../constants';
import ClubInfoText from '../../general/info-text/info-text';

interface INextEvents {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: any;
  reloadAction?: any;
  reloadComponent?: boolean

  
}
const NextEvents: FC<INextEvents> = ({
  title,
  navigation,
  white = false,
  style,
  events,
  reloadAction,

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
        reloadComponent={reloadAction}
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
          minHeight:ClubemberTheme.SIZES.BASE_SECURE*12.5,
          maxHeight: ClubemberTheme.SIZES.BASE_SECURE*12.5,
          //backgroundColor: ClubemberTheme.COLORS.TEXT_GRAY_ULTRA_LIGHT
          backgroundColor: ClubemberTheme.COLORS.BACKGROUND_LIGHT,
          padding: ClubemberTheme.SIZES.BASE_SECURE / 2,
          borderRadius: 10
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
        {events?.length > 0 ? (
            events.map((item: any, index: any) => (
              <ClubLargeCard
                key={index}
                white={white}
                title={item.Media.display_value}
                subtitle={item.Fecha}
                
                action={() => {
                  navigation.navigate(
                    item.navigation.stack,
                    {
                      screen: 'HistoryEvents',
                      params: { ...item }
                    }
                  );
                }}
              />
            ))
          ) : (
            <ClubInfoText style={{marginTop:ClubemberTheme.SIZES.BASE_SECURE * 4}}>Por el momento no tenemos eventos que mostrarte. Vuelve mas tarde</ClubInfoText>
          )}

        </ScrollView>
      </Block>
    </Block>
  );
};

export default NextEvents;

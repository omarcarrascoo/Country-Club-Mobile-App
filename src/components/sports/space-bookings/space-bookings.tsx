import React, { FC } from 'react';
import { Block } from 'galio-framework';
import ClubTitleCard from '../../general/title-card/title-card';
import { ClubemberTheme } from '../../../constants';
import {IIconList, ISportsBookingList, ISportsSpacesList} from '../../../interfaces/sports';
import ClubIconCard from '../../card/icon-card/icon-card';
import { ScrollView } from 'react-native';
import { SportsListStore } from '../../../constants/bookings-store';

interface ISpaceBookings {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: ISportsBookingList[];
  // list: IIconList[];
  list: ISportsSpacesList[]
}
const SpaceBookings: FC<ISpaceBookings> = ({
                                             title,
                                             navigation,
                                             white = false,
                                             style,
                                             list
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
            withAction
            white={white}
            onPressAction={() =>
                navigation.navigate('HomeStack', {
                  screen: 'BookingSports'
                })
            }
        >
          {title}
        </ClubTitleCard>

        <Block flex>
          <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical:
                    ClubemberTheme.SIZES.BASE_SECURE / 2
              }}
          >
            <Block
                flex
                row
                style={{
                  gap: ClubemberTheme.SIZES.BASE_SECURE / 2
                }}
            >
              {list.map((item, index) => {
                return (
                    <ClubIconCard
                        key={index}
                        white
                        title={item.Nombre_Deporte}
                        action={() =>
                            navigation.navigate('HomeStack', {
                              screen: 'BookingSports',
                              params: {...item}
                            })
                        }
                        icon={item.Icono}
                        iconFamily={item.Font}
                    />
                );
              })}
            </Block>
          </ScrollView>
        </Block>
      </Block>
  );
};

export default SpaceBookings;
import React, { FC } from 'react';
import { Block } from 'galio-framework';
import ClubTitleCard from '../../general/title-card/title-card';
import { ClubemberTheme } from '../../../constants';
import {IIconList, ISportsBookingList, ISportsSpacesList} from '../../../interfaces/sports';
import ClubIconCard from '../../card/icon-card/icon-card';
import { ScrollView, Text } from 'react-native';
import { SportsListStore } from '../../../constants/bookings-store';
import ClubInfoText from '../../general/info-text/info-text';

interface IDeliveryCategoryIconPicker {
  title: string;
  white?: boolean;
  style?: any;
  navigation?: any;
  // list: IIconList[];
  list: any
}
const DeliveryCategoryIconPicker: FC<IDeliveryCategoryIconPicker> = ( {
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
                navigation.navigate('RestaurantMenu', {
                  screen: 'RestaurantMenu'
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
              {list != undefined?(
                list.map((item:any, index:any) => {
                    return (
                        <ClubIconCard
                            bigCard= {true}
                            key={index}
                            white
                            title={item.Nombre_Categoria}
                            action={() =>
                                navigation.navigate('RestaurantMenu', {
                                  screen: 'RestaurantMenu',
                                  params: {...item}
                                })
                            }
                            icon={"dribbble"}
                            iconFamily={'entypo'}
                        />
                    );
                  })
              ):(
                    <ClubInfoText>No hay categorias disponibles por el momento</ClubInfoText>

              )}
            </Block>
          </ScrollView>
        </Block>
      </Block>
  );
};

export default DeliveryCategoryIconPicker;
import React, { FC, useEffect, useRef, useState } from 'react';
import { Block } from 'galio-framework';
import { ScrollView } from 'react-native';
import DownMenuItem from './components/down-menu-item/down-menu-item';
import { FamilyType } from '../../../interfaces/types';
import { ClubemberTheme } from '../../../constants';
import clubemberTheme from '../../../constants/clubember-theme';

const DownMenu: FC<any> = (props) => {
  const initialMenu = [
    {
      title: 'Eventos',
      icon: 'calendar',
      iconFamily: 'antdesign',
      navigation: {
        stack: 'HomeStack',
        screen: 'Events'
      }
    },
    {
      title: 'Deportes',
      icon: 'dribbble',
      iconFamily: 'entypo',
      navigation: {
        stack: 'HomeStack',
        screen: 'Sports'
      }
    },
    {
      title: 'Creditos',
      icon: 'credit',
      iconFamily: 'entypo',
      navigation: {
        stack: 'HomeStack',
        screen: 'Credits'
      }
    },
    {
      title: 'Home',
      icon: 'home',
      iconFamily: 'entypo',
      navigation: {
        stack: 'HomeStack',
        screen: 'Home'
      }
    },
    // {
    //   title: 'Visitas',
    //   icon: 'users',
    //   iconFamily: 'entypo',
    //   navigation: {
    //     stack: 'Auth',
    //     screen: 'Login',
    //     params: {}
    //   }
    // },
    {
      title: 'Delivery',
      icon: 'box',
      iconFamily: 'entypo',
      navigation: {
        stack: 'Delivery',
        screen: 'Delivery'
      }
    },
    {
      title: 'Invitados',
      icon: 'users',
      iconFamily: 'entypo',
      navigation: {
        stack: 'Invitados',
        screen: 'Invitados'
      }
    },
    {
      title: 'Ayuda',
      icon: 'help',
      iconFamily: 'entypo',
      navigation: {
        stack: 'Ayuda',
        screen: 'Ayuda'
      }
    }
  ];
  // const initialOffSet = {
  //   x: clubemberTheme.SIZES.BASE_SECURE * 6.2,
  //   y: 0
  // };
  const [menuOptions, _setMenuOptions] = useState(initialMenu);
  const [activeIndex, _] = useState(3);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    // Scroll to the initial position after the content has been rendered
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: clubemberTheme.SIZES.BASE_SECURE * 6.2,
        y: 0,
        animated: false,
      });
    }
  }, []);
  return (
      <Block>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={0}
            // contentOffset={{x: clubemberTheme.SIZES.BASE_SECURE * 6.2, y: 0}}
            ref={scrollViewRef}
            alwaysBounceHorizontal={true}
            bounces={true}
            contentContainerStyle={{
              paddingHorizontal: ClubemberTheme.SIZES.BASE,
            }}
        >
          <Block flex row top>
            {Array.from(Array(1), (e, i) => {
              return menuOptions.map((item, index) => {
                return (
                    <DownMenuItem
                        key={`${i}-${index}`}
                        active={index === activeIndex}
                        title={item.title}
                        icon={item.icon}
                        iconFamily={item.iconFamily as FamilyType}
                        onPress={() => {
                          props.navigation.navigate(item.navigation.stack, {
                            screen: item.navigation.screen,
                            // params: item.navigation?.params || null
                          });
                        }}
                    />
                );
              });
            })}
          </Block>
        </ScrollView>
      </Block>
  );
};

export default DownMenu;
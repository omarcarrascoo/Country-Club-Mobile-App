import React, { FC, useContext, useState } from 'react';
import { Block, Text } from 'galio-framework';
import {Image, Linking, ScrollView, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import { Images } from '../../../constants';
import { styles } from './styles';
import { ClubemberTheme } from '../../../constants';
import VerticalMenuItem from '../../../components/menu/vertical-menu/components/vertical-menu-item/vertical-menu-item';
import { IVerticalMenu } from './interface';
import ClubContext from '../../../context/context';
import DropDown from '../../Select';
import ClubInfoText from '../../general/info-text/info-text';

const VerticalMenu: FC<IVerticalMenu> = ({ navigation, state, sections }) => {
  const [expandedLevels, setExpandedLevels] = useState<number[]>([]);
  const { state:estado } = useContext(ClubContext);
  const handleExpand = (level: number, isExpand: boolean) => {
    if (!isExpand) {
      const filter = expandedLevels.filter((item) => item !== level);
      setExpandedLevels(filter);
      return;
    }
    setExpandedLevels([...expandedLevels, level]);
  }
  const profileFoto = `https://creator.zoho.com${estado.user.Foto_Socio}`
  const headers = estado.token.Authorization
  const handleImagePress = () => {
    Linking.openURL('www.startuptechnologies.co');
  };
  return (
    <Block flex style={styles.verticalMenu}>
      <Block flex={0.15} row middle>
        <Image source={Images.Logo} style={styles.topLogo} />
      </Block>

      <TouchableNativeFeedback onPress={() =>
          navigation.navigate('AccountStack', {
            screen: 'Membership'
        })
      }>
      <Block flex={ClubemberTheme.SIZES.BASE * 0.00875} row middle>
        <Block flex row>
          <Block flex={0.4} center>
            <Image source={{uri:profileFoto, headers: {Authorization:headers }}} style={styles.avatar} />
          </Block>

          <Block flex left middle>
            <Text style={styles.userName} color={ClubemberTheme.COLORS.PRIMARY}>
              {estado.user.Nombre_Socio.display_value}
            </Text>
            <Text
              size={ClubemberTheme.SIZES.BASE * 0.775}
              color={ClubemberTheme.COLORS.SHADOW}
            >
              {estado.user.Tipos_de_Membresias.display_value? estado.user.Tipos_de_Membresias.display_value: "Miembro Familiar"}
            </Text>
          </Block>
        </Block>
      </Block>
      </TouchableNativeFeedback>

      <View style={styles.line} />

      <Block flex row style={styles.contentMenu}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {sections.map((item, index) => {
            return (
              !item.hideItem && (
                <Block flex key={`${item.routeName}-${index}`}>
                  <VerticalMenuItem
                    item={item}
                    index={index}
                    expandedLevels={expandedLevels}
                    handleExpand={handleExpand}
                    focused={state.index === index}
                    onPress={() =>
                      item.navigation &&
                      navigation.navigate(item.navigation.stack, {
                        screen: item.navigation.screen
                      })
                    }
                    expand={item.Dropdown}
                  />
                  {item.childrenStack?.screens.length &&
                    item.childrenStack?.screens.find(
                      (i) => i.hideItem !== true
                    ) &&
                    expandedLevels.includes(index as never) &&
                    item.childrenStack.screens.map((subItem, subIndex) => {
                      return (
                        !subItem.hideItem && (
                          <VerticalMenuItem
                            key={`${subItem.routeName}-${subIndex}`}
                            index={subIndex}
                            expandedLevels={expandedLevels}
                            isSubItem
                            handleExpand={() => null}
                            item={subItem}
                            focused={false}
                            onPress={() =>
                              subItem.navigation &&
                              navigation.navigate(subItem.navigation.stack, {
                                screen: subItem.navigation.screen
                              })
                            }
                          />
                        )
                      );
                    })}
                </Block>
              )
            );
          })}
        </ScrollView>
      </Block>
       <TouchableOpacity onPress={handleImagePress}>
          <Block>
              <ClubInfoText>
                POWER BY
              </ClubInfoText>
              <Image source={Images.LogoStartUp} style={styles.bottomLogo} />
          </Block>
       </TouchableOpacity>
    </Block>
  );
};

export default VerticalMenu;

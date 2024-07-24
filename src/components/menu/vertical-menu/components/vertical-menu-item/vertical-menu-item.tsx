import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import { ClubemberTheme } from '../../../../../constants';
import clubemberTheme from '../../../../../constants/clubember-theme';
import ClubIcon from '../../../../general/buttons/icon/icon';
import { IVerticalMenuItem } from '../../interface';
import ClubIconButton from '../../../../general/buttons/icon-button/icon-button';

const VerticalMenuItem: FC<IVerticalMenuItem> = ({
  focused,
  item,
  onPress,
  isSubItem,
  handleExpand,
  expandedLevels,
  index,
  expand
}) => {
  const containerStyles = [
    isSubItem ? styles.subItemStyle : styles.itemStyle,
    focused ? [styles.activeStyle, styles.shadow] : null
  ];
  
  return (
    <TouchableOpacity
      style={{
        height: isSubItem
          ? ClubemberTheme.SIZES.BASE_SECURE * 3
          : ClubemberTheme.SIZES.BASE_SECURE * 3.6
      }}
      onPress={expand?(() =>
        expandedLevels.includes(index as never)
          ? handleExpand(index, false)
          : handleExpand(index, true)):onPress}
    >
      <Block flex row style={containerStyles}>
        <Block
          middle
          flex={0.1}
          style={{ marginRight: ClubemberTheme.SIZES.BASE_SECURE * 0.875 }}
        >
          <ClubIcon
            name={item.icon?.name || 'sweden'}
            iconFamily={item.icon?.family || 'entypo'}
            size={ClubemberTheme.SIZES.BASE}
            color={
              focused
                ? clubemberTheme.COLORS.WHITE
                : ClubemberTheme.COLORS.PRIMARY
            }
          />
        </Block>
        <Block row center flex={!isSubItem ? 0.7 : 0.9}>
          <Text
            size={ClubemberTheme.SIZES.BASE * 0.875}
            bold={focused}
            color={
              focused
                ? clubemberTheme.COLORS.WHITE
                : ClubemberTheme.COLORS.TEXT_GRAY_NORMAL
            }
          >
            {item.title}
          </Text>
        </Block>
        {!isSubItem &&
          item.childrenStack &&
          item.childrenStack?.screens.find((i) => i.hideItem !== true) && (
            <Block middle right flex={0.2}>
              <ClubIconButton
                name={
                  expandedLevels.includes(index as never)
                    ? 'angle-up'
                    : 'angle-down'
                }
                onPress={() =>
                  expandedLevels.includes(index as never)
                    ? handleExpand(index, false)
                    : handleExpand(index, true)
                }
                iconFamily={'Font-Awesome'}
                size={ClubemberTheme.SIZES.BASE_SECURE * 2.4}
                white={focused}
              />
            </Block>
          )}
      </Block>
    </TouchableOpacity>
  );
};

export default VerticalMenuItem;

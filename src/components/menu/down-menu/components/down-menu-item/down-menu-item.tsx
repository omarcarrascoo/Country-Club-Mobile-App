import React, { FC, useState } from 'react';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import { ClubemberTheme } from '../../../../../constants';
import { FamilyType } from '../../../../../interfaces/types';
import {
  ActivityIndicator,
  TouchableWithoutFeedback
} from 'react-native';
import ClubIcon from '../../../../general/buttons/icon/icon';

interface IDownMenuItem {
  title: string;
  icon: string;
  iconFamily: FamilyType;
  onPress: () => void;
  active?: boolean;
}
const DownMenuItem: FC<IDownMenuItem> = ({
  title,
  icon,
  iconFamily,
  onPress,
  active
}) => {
  const [isActive, _setIsActive] = useState(active);
  const [isHover, setIsHover] = useState(false);
  const pressIn = () => {
    setIsHover(true);
  };

  const pressOut = () => {
    setIsHover(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
    >
      <Block
        flex
        center
        middle
        style={styles.downContainer}
      >
        <Block
          flex
          center
          middle
          style={[
            styles.itemContainer,
            {
              width:
                isActive || isHover
                  ? ClubemberTheme.SIZES.BASE_SECURE * 5.5
                  : ClubemberTheme.SIZES.BASE_SECURE * 5,
              maxHeight:
                isActive || isHover
                  ? ClubemberTheme.SIZES.BASE_SECURE * 5.5
                  : ClubemberTheme.SIZES.BASE_SECURE * 5,
              backgroundColor:
                isActive || isHover
                  ? ClubemberTheme.COLORS.WHITE
                  : ClubemberTheme.COLORS
                      .BACKGROUND_DOWN_ITEM
            },
            (isActive || isHover) && {
              shadowColor: ClubemberTheme.COLORS.SHADOW,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              shadowOpacity: 0.1,
              elevation: 4
            }
          ]}
        >
          <ClubIcon
            white={!isActive || isHover}
            size={
              isActive
                ? ClubemberTheme.SIZES.BASE_SECURE * 3
                : ClubemberTheme.SIZES.BASE_SECURE * 2
            }
            name={icon}
            iconFamily={iconFamily}
            color={
              isActive || isHover
                ? ClubemberTheme.COLORS.BACKGROUND_DOWN_ITEM
                : ClubemberTheme.COLORS.WHITE
            }
          />
          {isHover && (
            <ActivityIndicator
              style={{
                paddingTop:
                  ClubemberTheme.SIZES.BASE_SECURE / 2
              }}
              size="small"
              color={
                isActive || isHover
                  ? ClubemberTheme.COLORS
                      .BACKGROUND_DOWN_ITEM
                  : ClubemberTheme.COLORS.WHITE
              }
            />
          )}
        </Block>
        <Text
          size={ClubemberTheme.SIZES.BASE_SECURE}
          bold={isActive}
          style={styles.menuText}
        >
          {title}
        </Text>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default DownMenuItem;

import React, { FC } from 'react';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { FamilyType } from '../../../interfaces/types';
import ClubIcon from '../../general/buttons/icon/icon';

interface IButtonCardSimple {
  icon?: string;
  iconFamily?: FamilyType;
  label: string;
  white?: boolean;
  centerT?: boolean;
  iconColor?: any
  action: () => void;
}
const ButtonCardSimple: FC<IButtonCardSimple> = ({
  action,
  icon,
  iconFamily,
  label,
  centerT,
  white = false,
  iconColor
}) => {
  return (
    <TouchableWithoutFeedback onPress={action}>
      <Block
        row
        card
        style={[
          styles.card,
          centerT &&{
            justifyContent: "center",
          },
          white && {
            backgroundColor: ClubemberTheme.COLORS.WHITE,
            shadowColor: ClubemberTheme.COLORS.SHADOW,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 2,
            shadowOpacity: 0.05,
            elevation: 2,
          }
        ]}
      >
        
        <Block
          style={{
            width: '80%',
            ...(centerT ? { justifyContent: 'center', paddingVertical: ClubemberTheme.SIZES.BASE_SECURE*.5} : { justifyContent: 'flex-start', paddingStart: ClubemberTheme.SIZES.BASE_SECURE / 2, paddingVertical: ClubemberTheme.SIZES.BASE_SECURE}),
          }}
        >
          <Text
            size={ClubemberTheme.SIZES.BASE*.90}
            style={[
              styles.cardTitle,
              centerT &&{
                textAlign: "center",
              },
            ]}
            color={ClubemberTheme.COLORS.TEXT_GRAY_NORMAL}
          >
            {label}
          </Text>
        </Block>
        {icon && ( <Block
          middle
          right
          center
          style={[
            {
              width: '10%'
            }
          ]}
        >
            <ClubIcon
            name={icon}
            iconFamily={iconFamily}
            color={iconColor?iconColor:ClubemberTheme.COLORS.DEFAULT}
            size={ClubemberTheme.SIZES.BASE}
          />
          
        </Block> )}
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default ButtonCardSimple;
import React, { FC } from 'react';
import { ClubemberTheme } from '../../../constants';
import { Block, Text } from 'galio-framework';
import { TouchableWithoutFeedback } from 'react-native';
import ClubIcon from '../buttons/icon/icon';

const ClubTitleCard: FC<{
  children: any;
  white?: boolean;
  withAction?: boolean;
  onPressAction?: () => void;
  flex?: boolean | number;
  style?: any;
  center?: boolean;
  reloadComponent?: boolean
}> = ({
  children,
  withAction = false,
  onPressAction,
  white = false,
  flex = false,
  style,
  center,
  reloadComponent
}) => {
  return (
    <Block
      flex={flex}
      row
      style={[
        {
          paddingBottom: ClubemberTheme.SIZES.BASE_SECURE
        },
        center && {
          justifyContent: 'center'
        },
        { ...style }
      ]}
    >
      <Block flex={flex ? (withAction ? 0.7 : 1) : flex}>
        <Text
          bold
          size={ClubemberTheme.SIZES.BASE*.9}
          color={
            white
              ? ClubemberTheme.COLORS.DEFAULT
              : ClubemberTheme.COLORS.WHITE
          }
        >
          {children}
        </Text>
      </Block>

      {withAction && (
        <TouchableWithoutFeedback onPress={onPressAction}>
          <Block flex={0.3} right middle>
            <Text
              size={ClubemberTheme.SIZES.BASE * 0.7}
              color={
                white
                  ? ClubemberTheme.COLORS.ICON
                  : ClubemberTheme.COLORS.WHITE
              }
            >
              {reloadComponent?(
                <ClubIcon
                style={{
                    paddingTop: ClubemberTheme.SIZES.BASE_SECURE,
                }}
                size={ClubemberTheme.SIZES.BASE_SECURE * 1.6}
                name={'ccw'}
                iconFamily={'entypo'}
                color={ClubemberTheme.COLORS.PLACEHOLDER}
              />
              ):(
                "Ver mas"
              )}
            </Text>
          </Block>
        </TouchableWithoutFeedback>
      )}
    </Block>
  );
};

export default ClubTitleCard;

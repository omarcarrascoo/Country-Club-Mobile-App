import React, { FC } from 'react';
import { Button, ButtonProps, Text } from 'galio-framework';
import { ClubemberTheme } from '../../../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

const ClubButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      {...props}
      textStyle={[
        styles.text,
        props.textStyle,
        props.outline && {
          color: props.red?(ClubemberTheme.COLORS.WARNING2):(ClubemberTheme.COLORS.DEFAULT)
        }
      ]}
      style={[
        props.gradient && styles.buttonGradient,
        props.defaultButton && { width: '100%' },
        props.style,
        props.outline && {
          backgroundColor: ClubemberTheme.COLORS.WHITE
        }
      ]}
    >
      {props.gradient ? (
        <LinearGradient
          colors={[
            ClubemberTheme.COLORS.PRIMARY,
            ClubemberTheme.COLORS.SECONDARY
          ]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 1.8, y: 0.8 }}
          locations={[0, 1]}
          style={styles.gradient}
        >
          {props.defaultButton ? (
            <Text
              style={[
                {
                  color: ClubemberTheme.COLORS.WHITE,
                  fontSize: ClubemberTheme.SIZES.BASE
                },
                props.textStyle
              ]}
            >
              {props.children}
            </Text>
          ) : (
            props.children
          )}
        </LinearGradient>
      ) : (
        props.children
      )}
    </Button>
  );
};

export default ClubButton;
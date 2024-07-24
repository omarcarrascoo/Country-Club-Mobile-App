import React, { FC } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubBackground from '../../../../components/general/backgrounds/club-background';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import { ClubemberTheme } from '../../../../constants';
import { FamilyType } from '../../../../interfaces/types';
import ClubButton from '../../../../components/general/buttons/button/button';

const EventDetail: FC<any> = ({ route, navigation }) => {
  const onReserve = () => {
    navigation.navigate(route.params.navigation.stack, {
      screen: 'EventReservation',
      params: { ...route.params }
    });
  };

  const DetailSection: FC<{
    title: string;
    icon: string;
    iconFamily?: FamilyType;
  }> = ({ title, icon, iconFamily = 'antdesign' }) => (
    <Block style={styles.detail} row>
      <ClubIcon
        style={{
          marginEnd: ClubemberTheme.SIZES.BASE / 3,
          marginTop: 1
        }}
        size={ClubemberTheme.SIZES.BASE * 0.7}
        name={icon}
        iconFamily={iconFamily}
        color={ClubemberTheme.COLORS.ICON}
      />
      <Text
        size={ClubemberTheme.SIZES.BASE * 0.75}
        color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
      >
        {title}
      </Text>
    </Block>
  );

  return (
    <ClubBackground
      imageStyle={styles.imageStyle}
      image={route.params.Image}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Block style={[styles.container]}>
          <Block>
            <ClubTitleCard white>
              {route.params.Nombre}
            </ClubTitleCard>
          </Block>

          <Block>
            <View style={styles.line} />
          </Block>

          <Block
            middle
            row
            style={styles.contentDetails}
            space="between"
          >
            <DetailSection
              icon={'calendar'}
              title={route.params.Fecha}
            />
            <DetailSection
              icon={'clock-o'}
              iconFamily={'Font-Awesome'}
              title={route.params.Hora}
            />
            <DetailSection
              icon={'money'}
              iconFamily={'Font-Awesome'}
              title={route.params.Precio}
            />
            <DetailSection
              icon={'location-pin'}
              iconFamily={'entypo'}
              title={'Casa Club'}
            />
          </Block>

          <Block>
            <View
              style={[
                styles.line,
                {
                  marginBottom:
                    ClubemberTheme.SIZES.BASE_SECURE * 1.5
                }
              ]}
            />
          </Block>

          <Block>
            <ClubInfoText
              size={ClubemberTheme.SIZES.BASE * 0.875}
            >
              {route.params.Descripcion}
            </ClubInfoText>
          </Block>

          <Block center>
            <ClubButton
              shadowless
              onPress={() => onReserve()}
              style={styles.reserveButton}
              gradient
              defaultButton
            >
              Hacer reserva
            </ClubButton>
          </Block>
        </Block>
      </ScrollView>
    </ClubBackground>
  );
};

export default EventDetail;

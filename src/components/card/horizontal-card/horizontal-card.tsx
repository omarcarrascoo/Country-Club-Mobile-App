import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import { ClubemberTheme } from '../../../constants';
import ClubIcon from '../../general/buttons/icon/icon';
import { FamilyType } from '../../../interfaces/types';
import ClubButton from '../../general/buttons/button/button';
import ClubContext from '../../../context/context';
import { getSportById, getSportByIdFetch } from '../../../redux/sportsRedux';
import { getAmenidadById, getAmenidadesReport } from '../../../redux/amenidadesRedux';

interface IClubHorizontalCard {
  image?: string;
  location?: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  price?: string;
  action: () => void;
  white?: boolean;
  withActions?: boolean;
  actionEdit?: () => void;
  actionDelete?: () => void;
  isRequest?: boolean;
  sportId?: string;
  amenidadId?: string;
}
const ClubHorizontalCard: FC<IClubHorizontalCard> = ({
  image,
  location,
  title,
  description,
  date,
  hour,
  price,
  action,
  white = false,
  withActions,
  actionEdit,
  actionDelete,
  isRequest,
  sportId,
  amenidadId
}) => {
  const { state } = useContext(ClubContext);
  const [uriFoto, setUriFoto] = useState(image)
  const [lugar, setLugar] = useState(location)
  useEffect(() =>{
      const getSportData = async () =>{
        if (sportId) {
          const Sport:any = await getSportByIdFetch(sportId)
          setUriFoto(Sport.Foto_Caratula)
        }
        
        if(amenidadId) {
          const amenidades:any = await getAmenidadById(amenidadId)
          setLugar(amenidades.Nombre)
          setUriFoto(amenidades.Foto)
        }
      }
      getSportData()
  },[sportId])
  const RenderTopImage = () => {
    const headers = state.token.Authorization    
    const productImage = `https://creator.zoho.com${uriFoto}`
    return(
      <TouchableOpacity onPress={action}>
        <Block>
          <Image
            source={{ uri: productImage, headers: {Authorization: headers}}}
            style={styles.topImage}
          />
        </Block>
      </TouchableOpacity>
    );
  };
  
  const DetailSection: FC<{
    title: string;
    icon: string;
    iconFamily?: FamilyType;
  }> = ({ title, icon, iconFamily = 'antdesign' }) => (
    <Block style={styles.cardSpecifications} row>
      <ClubIcon
        style={{
          marginEnd: ClubemberTheme.SIZES.BASE / 3,
          marginTop: 1
        }}
        size={ClubemberTheme.SIZES.BASE * 0.8}
        name={icon}
        iconFamily={iconFamily}
        color={ClubemberTheme.COLORS.ICON}
      />
      <Text
        size={ClubemberTheme.SIZES.BASE * 0.625}
        style={styles.cardDetails}
        color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
      >
        {title}
      </Text>
    </Block>
  );

  return (
    <Block
      card
      style={[
        styles.card,
        white && {
          backgroundColor: ClubemberTheme.COLORS.WHITE,
          shadowColor: ClubemberTheme.COLORS.SHADOW,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 2,
          shadowOpacity: 0.2,
          elevation: 2,
          marginBottom: 4
        }
      ]}
    >
      <TouchableWithoutFeedback onPress={action}>
        <Block flex row>
          {/* {(image || sportId || amenidadId) && (
            <Block flex={0.4} style={[styles.cardDescription]}>
              <RenderTopImage/>
            </Block>
          )} */}

          <Block flex={0.6} style={styles.cardContent}>
            <Block style={[styles.cardDescription]}>
              <Text
                size={ClubemberTheme.SIZES.BASE}
                style={styles.cardTitle}
                color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
              >
                {title}
              </Text>
            </Block>

            <Block style={[styles.cardDescription]}>
              <Text
                size={ClubemberTheme.SIZES.BASE * 0.75}
                style={styles.cardSubTitle}
                color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
              >
                {description}
              </Text>
            </Block>

            <Block left style={styles.cardDescription}>
              <DetailSection icon={'calendar'} title={date} />
              {location && (
                <DetailSection
                  icon={'location-pin'}
                  iconFamily={'entypo'}
                  title={lugar?(lugar):'Casa Club'}
                />
              )}
              <DetailSection
                icon={'clock-o'}
                iconFamily={'Font-Awesome'}
                title={hour}
              />
              {price&&
                  <DetailSection
                  icon={'money'}
                  iconFamily={'Font-Awesome'}
                  title={price}
                />
              }

              {isRequest && (
                <Block middle style={styles.tagCard}>
                  <Text
                    size={ClubemberTheme.SIZES.BASE * 0.625}
                    color={ClubemberTheme.COLORS.PRIMARY}
                  >
                    Solicitud recibida
                  </Text>
                </Block>
              )}

              {withActions && (
                <Block row middle>
                  <ClubButton
                    style={{
                      height: ClubemberTheme.SIZES.BASE * 1.7,
                      marginHorizontal: 0,
                      marginEnd: ClubemberTheme.SIZES.BASE_SECURE / 2,
                      alignItems: 'center',
                      width: '50%'
                    }}
                    textStyle={{
                      fontSize: ClubemberTheme.SIZES.BASE / 1.2,
                      textAlign: 'center',
                      paddingStart: ClubemberTheme.SIZES.BASE_SECURE
                    }}
                    shadowless
                    color={ClubemberTheme.COLORS.PRIMARY}
                    onPress={actionEdit}
                    defaultButton
                  >
                    <Block row>
                      <ClubIcon
                        size={ClubemberTheme.SIZES.BASE * 0.875}
                        color={ClubemberTheme.COLORS.WHITE}
                        name={'edit'}
                        iconFamily={'entypo'}
                      />
                      <Text
                        size={ClubemberTheme.SIZES.BASE * 0.75}
                        style={{
                          fontFamily: 'SanFrancisoLight',
                          paddingStart: ClubemberTheme.SIZES.BASE / 2
                        }}
                        color={ClubemberTheme.COLORS.WHITE}
                      >
                        Editar
                      </Text>
                    </Block>
                  </ClubButton>

                  <ClubButton
                    style={{
                      height: ClubemberTheme.SIZES.BASE * 1.7,
                      margin: 0,
                      alignItems: 'center',
                      width: '45%',
                      backgroundColor: ClubemberTheme.COLORS.INPUT_ERROR
                    }}
                    textStyle={{
                      fontSize: ClubemberTheme.SIZES.BASE / 1.2,
                      textAlign: 'center',
                      paddingStart: ClubemberTheme.SIZES.BASE_SECURE
                    }}
                    shadowless
                    color={ClubemberTheme.COLORS.PRIMARY}
                    onPress={actionDelete}
                    defaultButton
                  >
                    <ClubIcon
                      size={ClubemberTheme.SIZES.BASE * 0.875}
                      color={ClubemberTheme.COLORS.WHITE}
                      name={'trash'}
                      iconFamily={'entypo'}
                    />
                  </ClubButton>
                </Block>
              )}
            </Block>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    </Block>
  );
};

export { ClubHorizontalCard };

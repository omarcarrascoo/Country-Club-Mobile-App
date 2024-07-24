import React, { FC, useContext } from 'react';
import { Block, Text } from 'galio-framework';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import { ClubemberTheme } from '../../../constants';
import ClubIcon from '../../general/buttons/icon/icon';
import ClubButton from '../../general/buttons/button/button';
import { widthCard, widthCard2 } from '../../../constants/utils';
import ClubContext from '../../../context/context';
import { getTokenFromStorage } from '../../../redux/setToken';


interface IClubMediumCard {
  image?: string;
  title?: string;
  description?: string;
  date?: string;
  hour?: string;
  hourRange?: string;
  peopleQuantity?: string;
  price?: string;
  action?: () => void;
  buttonAction?: () => void;
  buttonLabel?: string;
  white?: boolean;
  justified?: boolean;
  original?:boolean;
  noHeight?:boolean;
}
const ClubMediumCard: FC<IClubMediumCard> = ({
  image,
  title,
  description,
  date = "",
  hour,
  hourRange,
  peopleQuantity,
  price,
  buttonAction,
  buttonLabel,
  action,
  white = false,
  justified,
  original,
  noHeight
}) => {

  



  const { state } = useContext(ClubContext);
  
  function formatearHora(horaCompleta:any) {
    var fecha = new Date('0000-00-00T' + horaCompleta + 'Z');
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var horaFormateada = ('0' + horas).slice(-2) + ':' + ('0' + minutos).slice(-2);
  
    return horaFormateada;
  }


  const renderTopImage = () => {
    const headers = state.token.Authorization    
    const productImage = `https://creator.zoho.com${image}`
    return(
      <TouchableOpacity onPress={action}>
        <Block flex>
          <Image
            source={{ uri: productImage, headers: {Authorization: headers}}}
            style={styles.topImage}
          />
        </Block>
      </TouchableOpacity>
    );
  };

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
            },
            original?(styles.cardWidth):(styles.cardWidth2)
          ]}
      >
        <TouchableWithoutFeedback onPress={action}>
          <Block style={noHeight?styles.cardContainer2:styles.cardContainer}>
            {image && (
                <Block style={[styles.cardDescription]}>
                  {renderTopImage()}
                </Block>
            )}

            <Block style={[styles.cardTexts]}>
              <Block style={[styles.cardDescription]}>
                <Text
                    size={ClubemberTheme.SIZES.BASE *.75}
                    style={styles.cardTitle}
                    color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
                >
                  {title}
                </Text>
              </Block>

              {description && (
                  <Block style={[styles.cardDescription]}>
                    <Text
                        size={ClubemberTheme.SIZES.BASE * 0.65}
                        style={styles.cardSubTitle}
                        color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
                    >
                      {description}
                    </Text>
                  </Block>
              )}

              {justified === true ? (
                <Block left style={styles.cardDescriptionJustify}>
                <Block row>
                  {date && (
                    <Block flex row style={styles.centerRow}>
                    <ClubIcon
                        style={{
                          marginEnd:
                              ClubemberTheme.SIZES.BASE / 3,
                          marginTop: 1
                        }}
                        size={ClubemberTheme.SIZES.BASE * 0.7}
                        name={'calendar'}
                        iconFamily={'antdesign'}
                        color={ClubemberTheme.COLORS.ICON}
                    />
                    <Text
                        size={ClubemberTheme.SIZES.BASE * 0.6}
                        style={styles.cardDetails}
                        color={
                          ClubemberTheme.COLORS.TEXT_GRAY_DARK
                        }
                    >
                      {date}
                    </Text>
                  </Block>
                  )}

                  
                </Block>
                {hour && (
                      <Block flex row>
                        <Text
                            size={ClubemberTheme.SIZES.BASE * 0.625}
                            style={[
                              styles.cardDetails,
                              {
                                marginLeft:
                                ClubemberTheme.SIZES.BASE,
                                textAlign: 'right'
                              }
                            ]}
                            color={
                              ClubemberTheme.COLORS.TEXT_GRAY_DARK
                            }
                        >
                          {hour}
                        </Text>
                      </Block>
                  )}
                {hourRange && (
                    <Block
                        flex
                        row
                        style={{
                          paddingTop: ClubemberTheme.SIZES.BASE / 4
                        }}
                    >
                      <ClubIcon
                          style={{
                            marginEnd:
                                ClubemberTheme.SIZES.BASE / 3,
                            marginTop: 1
                          }}
                          size={ClubemberTheme.SIZES.BASE * 0.7}
                          name={'clock-o'}
                          iconFamily={'Font-Awesome'}
                          color={ClubemberTheme.COLORS.ICON}
                      />
                      <Text
                          size={ClubemberTheme.SIZES.BASE * 0.6}
                          style={[styles.cardDetails]}
                          color={ClubemberTheme.COLORS.BLACK}
                      >
                        {hourRange}
                      </Text>
                    </Block>
                )}

                {peopleQuantity && (
                    <Block
                        flex
                        row
                        style={{
                          paddingTop: ClubemberTheme.SIZES.BASE / 4
                        }}
                    >
                      <ClubIcon
                          style={{
                            marginEnd:
                                ClubemberTheme.SIZES.BASE / 3,
                            marginTop: 1
                          }}
                          size={ClubemberTheme.SIZES.BASE * 0.7}
                          name={'users'}
                          iconFamily={'Font-Awesome'}
                          color={ClubemberTheme.COLORS.ICON}
                      />
                      <Text
                          size={ClubemberTheme.SIZES.BASE * 0.6}
                          style={[styles.cardDetails]}
                          color={ClubemberTheme.COLORS.BLACK}
                      >
                        {peopleQuantity}
                      </Text>
                    </Block>
                )}

                {price && (
                    <Block
                        flex
                        row
                        style={{
                          paddingTop: ClubemberTheme.SIZES.BASE / 4,
                          alignItems: "center"
                        }}
                    >
                      <ClubIcon
                          style={{
                            marginEnd: ClubemberTheme.SIZES.BASE / 3,
                            marginTop: 1
                          }}
                          size={ClubemberTheme.SIZES.BASE * 0.7}
                          name={'money'}
                          iconFamily={'Font-Awesome'}
                          color={ClubemberTheme.COLORS.ICON}
                      />
                      <Text
                          size={ClubemberTheme.SIZES.BASE * 0.6}
                          style={[styles.cardDetails]}
                          color={ClubemberTheme.COLORS.BLACK}
                      >
                        ${price}
                      </Text>
                    </Block>
                )}
              </Block>
              ):(
                <Block left style={styles.cardDescriptionShort}>
                <Block row>
                  {date && (
                    <Block flex row style={styles.centerRow}>
                    <ClubIcon
                        style={{
                          marginEnd:
                              ClubemberTheme.SIZES.BASE / 3,
                          marginTop: 1
                        }}
                        size={ClubemberTheme.SIZES.BASE * 0.65}
                        name={'calendar'}
                        iconFamily={'antdesign'}
                        color={ClubemberTheme.COLORS.ICON}
                    />
                    <Text
                        size={ClubemberTheme.SIZES.BASE * 0.6}
                        style={styles.cardDetails}
                        color={
                          ClubemberTheme.COLORS.TEXT_GRAY_DARK
                        }
                    >
                      {date}
                    </Text>
                  </Block>
                  )}

                  
                </Block>
                {hour && (
                      <Block flex row
                      style={{
                        paddingTop: ClubemberTheme.SIZES.BASE / 4
                      }}>
                        <ClubIcon
                          style={{
                            marginEnd:
                                ClubemberTheme.SIZES.BASE / 3,
                            marginTop: 1
                          }}
                          size={ClubemberTheme.SIZES.BASE * 0.65}
                          name={'clock-o'}
                          iconFamily={'Font-Awesome'}
                          color={ClubemberTheme.COLORS.ICON}
                      />
                        <Text
                            size={ClubemberTheme.SIZES.BASE * 0.625}
                            style={[ styles.cardDetails]}
                            color={
                              ClubemberTheme.COLORS.TEXT_GRAY_DARK
                            }
                        >
                          {hour}
                        </Text>
                      </Block>
                  )}
                {hourRange && (
                    <Block
                        flex
                        row
                        style={{
                          paddingTop: ClubemberTheme.SIZES.BASE / 4
                        }}
                    >
                      <ClubIcon
                          style={{
                            marginEnd:
                                ClubemberTheme.SIZES.BASE / 3,
                            marginTop: 1
                          }}
                          size={ClubemberTheme.SIZES.BASE * 0.4}
                          name={'clock-o'}
                          iconFamily={'Font-Awesome'}
                          color={ClubemberTheme.COLORS.ICON}
                      />
                      <Text
                          size={ClubemberTheme.SIZES.BASE * 0.625}
                          style={[styles.cardDetails]}
                          color={ClubemberTheme.COLORS.BLACK}
                      >
                        {hourRange}
                      </Text>
                    </Block>
                )}

                {peopleQuantity && (
                    <Block
                        flex
                        row
                        style={{
                          paddingTop: ClubemberTheme.SIZES.BASE / 4
                        }}
                    >
                      <ClubIcon
                          style={{
                            marginEnd:
                                ClubemberTheme.SIZES.BASE / 3,
                            marginTop: 1
                          }}
                          size={ClubemberTheme.SIZES.BASE * 0.4}
                          name={'users'}
                          iconFamily={'Font-Awesome'}
                          color={ClubemberTheme.COLORS.ICON}
                      />
                      <Text
                          size={ClubemberTheme.SIZES.BASE * 0.625}
                          style={[styles.cardDetails]}
                          color={ClubemberTheme.COLORS.BLACK}
                      >
                        {peopleQuantity}
                      </Text>
                    </Block>
                )}

                {price && (
                    <Block
                        flex
                        row
                        style={{
                          paddingTop: ClubemberTheme.SIZES.BASE / 4,
                          alignItems: "center"
                        }}
                    >
                      <ClubIcon
                          style={{
                            marginEnd:
                                ClubemberTheme.SIZES.BASE / 3,
                            marginTop: 1
                          }}
                          size={ClubemberTheme.SIZES.BASE * 0.7}
                          name={'money'}
                          iconFamily={'Font-Awesome'}
                          color={ClubemberTheme.COLORS.ICON}
                      />
                      <Text
                          size={ClubemberTheme.SIZES.BASE * 0.6}
                          style={[styles.cardDetails]}
                          color={ClubemberTheme.COLORS.BLACK}
                      >
                        {price}
                      </Text>
                    </Block>
                )}

                
              </Block>
              )}
              
            </Block>
            <Block >
              {buttonAction && (
                    <Block row center style={styles.cardDescriptionShort}>
                      <ClubButton
                          style={{
                            height: ClubemberTheme.SIZES.BASE * 1.4,
                            alignItems: 'flex-start'
                          }}
                          textStyle={{
                            fontSize:
                                ClubemberTheme.SIZES.BASE / 1.2,
                            textAlign: 'left',
                            paddingStart:
                            ClubemberTheme.SIZES.BASE_SECURE
                          }}
                          shadowless
                          color={ClubemberTheme.COLORS.PRIMARY}
                          onPress={buttonAction}
                          defaultButton
                      >
                        {buttonLabel}
                      </ClubButton>
                    </Block>
                )}
            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
  );
};

export default ClubMediumCard;
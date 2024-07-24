import React, { FC, useContext, useState } from 'react';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import { Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import ClubIconButton from '../../general/buttons/icon-button/icon-button';
import ClubContext from '../../../context/context';
import { heightScreen } from '../../../constants/utils';
import ClubIcon from '../../general/buttons/icon/icon';

interface IClubCreditItemCard {
  action: () => void;
  title: string;
  amount: number;
  isPositive?: boolean;
  white?: boolean;
  dateDivided?: string
  ticket?: string
  firma?: string
}
const ClubCreditItemCard: FC<IClubCreditItemCard> = ({
  action,
  title,
  amount,
  isPositive,
  white = false,
  dateDivided,
  ticket,
  firma
}) => {
  const [showImage, setShowImage] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState ("")
  const [imageUri, setImageUri] = useState("");
  const {state} = useContext(ClubContext)
  function divirFecha(fechaHora:any) {
    const partes = fechaHora.split(' ');
    const fecha = partes[0];
    const hora = partes[1];
    return { fecha, hora };
}
// const openFullImage = (image:string) =>{
//   const headers = state.token.Authorization    
//   const fotoUri = `https://creator.zoho.com${image}`
//   return(
//     <Block>
//     <Image
//       source={{ uri: fotoUri, headers: {Authorization: headers}}}
//     />
//   </Block>
//   )
// }
const openFullImage = (image: string) => {
  const headers = state.token.Authorization;
  const fotoUri = `https://creator.zoho.com${image}`;
  setImageUri(fotoUri);
  setShowFullImage(true);
  setSelectedImage(image);
};
const closeFullImage =()=>{
  setShowFullImage(false)
}

const renderTopImage = (image:any) => {
  const headers = state.token.Authorization    
  const fotoUri = `https://creator.zoho.com${image}`
  return(
          <TouchableWithoutFeedback onPress={() => {
            openFullImage(image)
            setShowImage(false)
          }}>
            <Image
              source={{ uri: fotoUri, headers: {Authorization: headers}}}
              style={{ 
              width: "100%",
              height: "100%",
              objectFit: "contain",
              position: "absolute",
              top: 0,
              left: 0
              }}
            />
          </TouchableWithoutFeedback>
  );
};
const { fecha, hora } = divirFecha(dateDivided);
  return (
    
    <>
    <TouchableWithoutFeedback onPress={() => {showFullImage != true ? setShowImage(!showImage) : console.log("ImageSelected")}}>

    <Block>
    <Block
      row
      card
      flex
      space="between"
      style={[
        styles.card,
        white && {
          backgroundColor: ClubemberTheme.COLORS.WHITE,
          shadowColor: ClubemberTheme.COLORS.SHADOW,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 2,
          shadowOpacity: 0.05,
          elevation: 2
        }
      ]}
    >
      <Block flex={0.15} center middle>
        <ClubIconButton
          style={[
            styles.icon,
            white && {
              backgroundColor: isPositive
                ? ClubemberTheme.COLORS.INPUT_SUCCESS
                : ClubemberTheme.COLORS.INPUT_ERROR
            }
          ]}
          iconColor={
            white
              ? ClubemberTheme.COLORS.WHITE
              : ClubemberTheme.COLORS.ICON_DARK
          }
          iconFamily={'entypo'}
          size={ClubemberTheme.SIZES.BASE * 0.75}
          name={isPositive ? 'chevron-up' : 'chevron-down'}
          onPress={() => null}
        />
      </Block>
      <Block flex={0.75} left middle style={styles.cardDescription}>
        <Text
          size={ClubemberTheme.SIZES.BASE * .7}
          style={styles.cardTitle}
          color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
        >
          {title}
        </Text>

        <Text
          size={ClubemberTheme.SIZES.BASE * 0.6}
          style={[
            styles.cardSubTitle,
            {
              paddingTop: ClubemberTheme.SIZES.BASE_SECURE / 2
            }
          ]}
          color={ClubemberTheme.COLORS.SUBTITLE_SHORT_CARD}
        >
          {fecha} - {hora}
        </Text>
      </Block>
      <Block flex={0.3} right middle style={styles.cardDescription}>
        <Text
          size={ClubemberTheme.SIZES.BASE * 0.65}
          style={styles.amount}
          color={
            isPositive
              ? ClubemberTheme.COLORS.INPUT_SUCCESS
              : ClubemberTheme.COLORS.INPUT_ERROR
          }
        >
          {isPositive ? '+' : '-'} $ {amount}
        </Text>

        <Text
          size={ClubemberTheme.SIZES.BASE * 0.625}
          style={[
            styles.cardSubTitle,
            {
              paddingTop: ClubemberTheme.SIZES.BASE_SECURE / 2
            }
          ]}
          color={ClubemberTheme.COLORS.SUBTITLE_SHORT_CARD}
        >
          {isPositive?"Abono": "Ver mas"}
        </Text>
      </Block>
    </Block>
      {showImage && (
        <Block flex={1} center middle row>
            <Block style ={{width: "50%", position:"relative", height: 200, overflow: "hidden"}}>
              {renderTopImage(firma)}
            </Block>
            <Block style ={{width: "50%", position:"relative", height: 200, overflow: "hidden"}}>
              {renderTopImage(ticket)}
            </Block>
        </Block>
      )}
    </Block>
    </TouchableWithoutFeedback>
    <Block>
    {showFullImage && (
          <TouchableOpacity onPress={()=>setShowFullImage(false)}>
        <Block style={{ width:"100%", height:heightScreen / 2}}> 
          <Block right>
              <ClubIcon
                  name='x'
                  family='Feather'
                  size={40}
                  color={ClubemberTheme.COLORS.DEFAULT}
                />
          </Block>
          <Image
            source={{ uri: imageUri, headers: { Authorization: state.token.Authorization } }}
            style={{ 
              width: "100%",
              height: "100%",
              objectFit: "contain",
              position: "absolute",
              top: 0,
              left: 0
            }}
            />
      </Block>
            </TouchableOpacity>
      )}
    </Block>
    </>
  );
};

export default ClubCreditItemCard;

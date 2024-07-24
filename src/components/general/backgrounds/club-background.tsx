import React, { FC, useContext } from 'react';
import { ClubemberTheme, Images } from '../../../constants';
import {
  heightScreen,
  widthScreen
} from '../../../constants/utils';
import {
  ImageBackground,
  ImageStyle,
  StyleProp,
  ViewStyle
} from 'react-native';
import { TouchableWithoutFeedbackProps } from 'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback';
import ClubContext from '../../../context/context';

interface IClubBackground
  extends TouchableWithoutFeedbackProps {
  image?: string;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}
const ClubBackground: FC<IClubBackground> = ({
  image,
  style,
  imageStyle,
  ...props
}) => {
  const { state } = useContext(ClubContext);
  const headers = state.auth.Authorization
  const productImage = `https://creator.zoho.com${image}`
  return (
    <ImageBackground
      imageStyle={imageStyle}
      source={
        image
          ? {
              uri: productImage,
              headers: {Authorization: headers} 
            }
          : Images.SplashBackground
      }
      style={[
        {
          width: widthScreen,
          height:
            heightScreen + ClubemberTheme.SIZES.BASE * 2,
          top: -10,
          zIndex: 0
        },
        style
      ]}
    >
      {props.children}
    </ImageBackground>
  );
};

export default ClubBackground;

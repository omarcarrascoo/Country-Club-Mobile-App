import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import {
  heightScreen,
  spacingTopHeader
} from '../../../constants/utils';
import { ImageSlider } from 'react-native-image-slider-banner';
import { styles } from './styles';
import { ScreenGeneralProps } from '../../../interfaces/types';
import ClubIconTextButton from '../../../components/general/buttons/icon-text-button/icon-text-button';
import { getTokenFromStorage } from '../../../redux/setToken';
import ClubContext from '../../../context/context';
import { getNoticias1 } from '../../../redux/clubInfoRedux';

const HomeBanner: FC<ScreenGeneralProps<any, string>> = ({
  navigation
}) => {
  const [dataImagesSlider, setDataImagesSlider] = useState<any>();
  const {updateAuthorization} = useContext(ClubContext)
  const [zohoTkn, setZohoTkn] = useState("")

  useEffect(()=>{
    const updateToken = async () => {
      const newToken: any = await getTokenFromStorage();
      const zohoToken = 'Zoho-oauthtoken ' + newToken;
      setZohoTkn(zohoToken)
      updateAuthorization(zohoToken);
    };
    const getMedia = async () =>{
      const data = await getNoticias1();
      setDataImagesSlider(data)
    }
    updateToken();
    getMedia()
  }, [])
  console.log(dataImagesSlider);
  console.log(zohoTkn);

  
  return (
    <Block flex style={styles.container}>
      <Block flex center>
        <ImageSlider
          data={dataImagesSlider}
          token={zohoTkn}
          preview={false}
          autoPlay={true}
          timer={5000}
          caroselImageStyle={{
            resizeMode: 'cover',
            height: heightScreen,
            top: spacingTopHeader
          }}
          closeIconColor="#fff"
        />
      </Block>
      <Block flex center style={styles.padded}>
        <ClubIconTextButton
          shadowless
          shadowlessBg
          gradient
          round
          size="small"
          iconFamily={'Font-Awesome'}
          icon={'angle-right'}
          onPress={() =>
            navigation.navigate('Auth', {
              screen: 'Login'
            })
          }
          text={'Omitir  '}
        />
      </Block>
    </Block>
  );
};
export default HomeBanner;

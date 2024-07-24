import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import { Articles, Images } from '../constants';

const assetImages = [
  Images.Loader,
  Images.BannerHomeImages,
  Images.SportEvent1,
  Images.ProfilePicture,
  Images.SplashBackground,
  Images.HomeBackground,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];

Articles.map((article) => assetImages.push(article.image));
const cacheImages = (images: any[]) => {
  return images.map((image) => {
    if (typeof image === 'object') {
      return image.forEach((img: string) =>
        Asset.fromModule(img).downloadAsync()
      );
    } else if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

export const loadAssets = async () => {
  console.log('Loading heavy assets in the background');
  return Promise.all([...cacheImages(assetImages)]);
};

import * as Font from 'expo-font';
import ArgonExtra from '../../assets/font/argon.ttf';
import RobotoRegular from '../../assets/font/Roboto-Regular.ttf';
import RobotoBlack from '../../assets/font/Roboto-Black.ttf';
import RobotoBlackItalic from '../../assets/font/Roboto-BlackItalic.ttf';
import RobotoBold from '../../assets/font/Roboto-Bold.ttf';
import RobotoBoldItalic from '../../assets/font/Roboto-BoldItalic.ttf';
import RobotoLight from '../../assets/font/Roboto-Light.ttf';
import RobotoLightItalic from '../../assets/font/Roboto-LightItalic.ttf';
import RobotoThin from '../../assets/font/Roboto-Thin.ttf';
import RobotoThinItalic from '../../assets/font/Roboto-ThinItalic.ttf';
import SanFrancisoSemibold from '../../assets/font/SF-Pro-Text-Semibold.otf';
import SanFrancisoBold from '../../assets/font/SF-Pro-Text-Bold.otf';
import SanFrancisoHeavy from '../../assets/font/SF-Pro-Text-Heavy.otf';
import SanFrancisoLight from '../../assets/font/SF-Pro-Text-Light.otf';
import SanFrancisoMedium from '../../assets/font/SF-Pro-Text-Medium.otf';
import SanFrancisoRegular from '../../assets/font/SF-Pro-Text-Regular.otf';
import SanFranciso from '../../assets/font/SFUIText-Regular.otf';
export const loadFonts = async () => {
  return await Font.loadAsync({
    ArgonExtra,
    RobotoRegular,
    RobotoBlack,
    RobotoBlackItalic,
    RobotoBold,
    RobotoBoldItalic,
    RobotoLight,
    RobotoLightItalic,
    RobotoThin,
    RobotoThinItalic,
    SanFrancisoSemibold,
    SanFrancisoBold,
    SanFrancisoHeavy,
    SanFrancisoLight,
    SanFrancisoMedium,
    SanFrancisoRegular,
    SanFranciso
  });
};

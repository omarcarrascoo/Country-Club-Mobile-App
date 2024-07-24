import { StyleSheet } from 'react-native';
import { theme } from 'galio-framework';
import {
  heightScreen,
  paddingTopHeader
} from '../../../constants/utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS?.BLACK,
    height: heightScreen
  },
  padded: {
    paddingHorizontal: 0,
    paddingVertical: paddingTopHeader,
    position: 'absolute',
    right: 0,
    zIndex: 2
  }
});

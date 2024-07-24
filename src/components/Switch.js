import React from 'react';
import { Switch, Platform } from 'react-native';

import { ClubemberTheme } from '../constants';

class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;
    const thumbColor =
      Platform.OS === 'ios'
        ? null
        : Platform.OS === 'android' && value
        ? ClubemberTheme.COLORS.SWITCH_ON
        : ClubemberTheme.COLORS.SWITCH_OFF;

    return (
      <Switch
        value={value}
        thumbColor={thumbColor}
        ios_backgroundColor={
          ClubemberTheme.COLORS.SWITCH_OFF
        }
        trackColor={{
          false: ClubemberTheme.COLORS.SWITCH_ON,
          true: ClubemberTheme.COLORS.SWITCH_ON
        }}
        {...props}
      />
    );
  }
}

export default MkSwitch;

import React, { FC } from 'react';
import { Block } from 'galio-framework';
import ClubLabelForm from '../../form/label/label';
import ClubInfoText from '../../general/info-text/info-text';
import { InputModeOptions, KeyboardTypeOptions } from 'react-native';
import ClubInputText, {
  IClubInputText
} from '../../form/input-text/input-text';
import { ClubemberTheme } from '../../../constants';

interface IClubInputForm extends IClubInputText {
  label: string;
  description?: string;
  style?: any;
  inputStyle?: any;
  onChange: (item: any) => void;
  type?: KeyboardTypeOptions;
  inputMode?: InputModeOptions;
}
const ClubInputForm: FC<IClubInputForm> = ({
  label,
  description,
  onChange,
  style,
  inputStyle,
  ...props
}) => {
  return (
    <Block
      style={[
        {
          width: '100%',
          paddingBottom: ClubemberTheme.SIZES.BASE_SECURE / 2
        },
        style
      ]}
    >
      <ClubLabelForm text={label} noPadding />
      {description?.length && <ClubInfoText>{description}</ClubInfoText>}
      <ClubInputText
        {...props}
        style={inputStyle}
        defaultValue={''}
        onChangeText={onChange}
        borderless
      />
    </Block>
  );
};

export default ClubInputForm;

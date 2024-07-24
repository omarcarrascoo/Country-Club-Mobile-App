import React, { FC, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker';
import ClubLabelForm from '../../form/label/label';
import { ClubemberTheme } from '../../../constants';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import ClubInfoText from '../../general/info-text/info-text';
import ClubIcon from '../../general/buttons/icon/icon';

interface IClubDatePickerForm {
  label?: string;
  mode?: 'date' | 'time' | 'datetime' | 'countdown';
  display?: any;
  show?: boolean;
  value: any;
  style?: any;
  onChange: (
    event: DateTimePickerEvent,
    item: Date | undefined
  ) => void;
}
const ClubDatePickerForm: FC<IClubDatePickerForm> = ({
  label,
  mode = 'datetime',
  value,
  onChange,
  style,
  
  ...props
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (Platform.OS !== 'ios') {
      if (show) {
        // DateTimePickerAndroid.open({
        //   mode: 'time',
        //   onChange: onChange,
        //   value
        // } as any);
        const currentDate = new Date();

        if (value.getTime() >= currentDate.getTime()) {
          DateTimePickerAndroid.open({
            mode: 'date',
            onChange: onChange,
            value,
          } as any);
        }
        DateTimePickerAndroid.open({
          mode: 'date',
          onChange: onChange,
          value
        } as any);
        setShow(false);
        return;
      }
      /*DateTimePickerAndroid.dismiss('date');
      DateTimePickerAndroid.dismiss('time');*/
    }
  }, [show]);

  return (
    <Block
      style={{
        paddingBottom:
          ClubemberTheme.SIZES.BASE_SECURE * 1.2,
        ...style
      }}
    >
      {label && <ClubLabelForm text={label} />}

      <Block left>
        {Platform.OS === 'ios' ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={value}
            mode={mode as any}
            onChange={onChange}
            textColor={ClubemberTheme.COLORS.WHITE}
            locale="es-CO"
            minuteInterval={15}
            is24Hour={false}
            themeVariant={'light'}
            minimumDate={new Date()}
            {...props}
          />
        ) : (
          value && (
            <Block left>
              <TouchableWithoutFeedback
                onPress={() => setShow(!show)}
              >
                <Block row>
                  <ClubInfoText
                    style={{
                      marginEnd: ClubemberTheme.SIZES.BASE
                    }}
                    size={ClubemberTheme.SIZES.BASE * 0.75}
                  >
                    {value.toString()}
                  </ClubInfoText>
                  <ClubIcon
                    size={ClubemberTheme.SIZES.BASE}
                    color={ClubemberTheme.COLORS.DEFAULT}
                    name={show ? 'cross' : 'edit'}
                    iconFamily={'entypo'}
                  />
                </Block>
              </TouchableWithoutFeedback>
            </Block>
          )
        )}
      </Block>
    </Block>
  );
};

export default ClubDatePickerForm;

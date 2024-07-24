import React, { FC } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { ClubemberTheme } from '../../../constants';
import ClubIcon from '../../general/buttons/icon/icon';
import styles from './styles';
import { Block } from 'galio-framework';

interface IClubInputSelect {
  options: any[];
  onSelect: (item: any, index: number) => void;
  placeholder?: string;
  style?: any;
  shadowless?: any;
  defaultValue?: string;
  value?:any;
}
const ClubInputSelect: FC<IClubInputSelect> = ({
  options,
  onSelect,
  placeholder,
  defaultValue,
  style,
  shadowless = false,
  value
}) => {
  return (
    <Block
      style={[
        styles.dropdownContainer,
        !shadowless && styles.shadow,
        style
      ]}
    >
      <SelectDropdown
        data={options}
        //defaultValueByIndex={1}
        defaultValue={defaultValue}
        onSelect={onSelect}
        defaultButtonText={placeholder}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem;
        }}
        rowTextForSelection={(item) => {
          return item;
        }}
        selectedRowStyle={styles.selectedRowStyle}
        selectedRowTextStyle={styles.selectedRowTextStyle}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <ClubIcon
              size={ClubemberTheme.SIZES.BASE * 1.5}
              color={ClubemberTheme.COLORS.ICON}
              name={isOpened ? 'angle-up' : 'angle-down'}
              iconFamily={'Font-Awesome'}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
    </Block>
  );
};

export default ClubInputSelect;

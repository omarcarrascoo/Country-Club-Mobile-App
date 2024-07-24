import React, { FC } from 'react';
import ClubLabelForm from '../../form/label/label';
import ClubInfoText from '../../general/info-text/info-text';
import ClubInputSelect from '../../form/select-dropdown/select-dropdown';
import { Block } from 'galio-framework';
import ClubCounterInput from '../counterInput/counterInput';

interface IClubSelect {
  label?: string;
  placeholder?: string;
  description?: string;
  options?: any[];
  style?: any;
  defaultValue?: any;
  onSelect?: any;
  counter?:boolean
  onNumberChange?:any
  setItems?: any
}
const ClubSelectForm: FC<IClubSelect> = ({
  label,
  placeholder,
  description,
  onSelect,
  options,
  defaultValue = null,
  style,
  counter = false,
  onNumberChange,
  setItems
}) => {
  
  return (
    <Block
      style={[
        {
          width: '100%'
        },
        style
      ]}
    >
      {label && <ClubLabelForm text={label} />}
      {description?.length && <ClubInfoText>{description}</ClubInfoText>}

      {counter === false?(
        <ClubInputSelect
        onSelect={onSelect}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      ):(
        <ClubCounterInput
            label='* Invitados'
            onChange={onNumberChange}
            setItems ={setItems}
       />
      )}
      
      
    </Block>
  );
};

export default ClubSelectForm;

import React, { FC, useState } from "react";
import { Block } from "galio-framework";
import ClubInputText, { IClubInputText } from "../../form/input-text/input-text";
import { Button } from "../..";
import ClubIcon from "../../general/buttons/icon/icon";
import { ClubemberTheme } from "../../../constants";

interface IClubCounterInput extends IClubInputText {
  label?: string;
  style?: any;
  center?: boolean;
  onChange?: (item: any) => void;
  setItems:any
  valores?: number
}

const ClubCounterInput: FC<any> = ({ label, style, center, onChange, setItems, valores }) => {
  const [guests, setGuests] = useState(valores !== undefined ? valores : 0);

  
  const handleIncrement = () => {
    setGuests(guests + 1);
    setItems(guests + 1)
  };

  const handleDecrement = () => {
    if (guests > 0) {
      setGuests(guests - 1);
      setItems(guests - 1)
    }
  };

  return (
    center?(
      <Block flex row style={style}>
      <Button
        color="WHITE"
        style={{
          maxWidth: ClubemberTheme.SIZES.BASE * 2,
          maxHeight: ClubemberTheme.SIZES.BASE * 2,
        }}
        onPress={handleDecrement} 
      >
      <ClubIcon color={ClubemberTheme.COLORS.TEXT_GRAY_DARK} name="minus-circle" iconFamily="Feather" />
      </Button>
      <ClubInputText
        type="numeric"
        value={guests.toString()} 
        placeholder={label}
        style={{ width: 50 }}
      />
      <Button
        color="WHITE"
        style={{
          maxWidth: ClubemberTheme.SIZES.BASE * 2,
          maxHeight: ClubemberTheme.SIZES.BASE * 2,
        }}
        onPress={handleIncrement} 
      >
        <ClubIcon color={ClubemberTheme.COLORS.TEXT_GRAY_DARK} name="plus-circle" iconFamily="Feather" />
      </Button>
    </Block>
    ):(
      <Block flex row>
      <ClubInputText
        style={{ minWidth: "69%" }}
        type="numeric"
        value={guests.toString()}
        placeholder={label}
        onChange={onChange}
      />
      <Button
        color={"WHITE"}
        style={{
          maxWidth: ClubemberTheme.SIZES.BASE * 2,
          maxHeight: ClubemberTheme.SIZES.BASE * 2,
        }}
        onPress={handleDecrement} 
      >
        <ClubIcon color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}  name="minus-circle" iconFamily="Feather" />
      </Button>
      <Button
        color="WHITE"
        style={{
          maxWidth: ClubemberTheme.SIZES.BASE * 2,
          maxHeight: ClubemberTheme.SIZES.BASE * 2,
        }}
        onPress={handleIncrement}
      >
        <ClubIcon color={ClubemberTheme.COLORS.TEXT_GRAY_DARK} name="plus-circle" iconFamily="Feather" />
      </Button>
    </Block>
    )
  );
};

export default ClubCounterInput;

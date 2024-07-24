import React, { FC, useState } from 'react';
import { Block, Text } from 'galio-framework';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import { PaymentIcon } from 'react-native-payment-icons';

interface IClubCreditCardItem {
  onSelect: (e: string) => void;
  activeCard?: string;
  type: 'amex' | 'master' | 'visa' | 'generic' | 'maestro' | 'diners';
  cardNumber: string;
  white?: boolean;
}
const ClubCreditCardItem: FC<IClubCreditCardItem> = ({
  onSelect,
  activeCard,
  type = 'generic',
  cardNumber,
  white = false
}) => {
  const [creditCard, _] = useState(cardNumber);

  const onChangeCreditCard = () => {
    onSelect(creditCard);
  };

  return (
    <TouchableWithoutFeedback onPress={onChangeCreditCard}>
      <Block
        row
        card
        style={[
          styles.card,
          white && {
            backgroundColor: ClubemberTheme.COLORS.WHITE,
            shadowColor: ClubemberTheme.COLORS.SHADOW,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 2,
            shadowOpacity: 0.05,
            elevation: 2
          },
          activeCard === creditCard && {
            borderWidth: 2,
            borderColor: ClubemberTheme.COLORS.DEFAULT
          }
        ]}
      >
        <Block
          middle
          center
          style={[
            styles.cardDescription,
            {
              width: '20%'
            }
          ]}
        >
          <PaymentIcon type={type} />
        </Block>
        <Block
          middle
          style={[
            styles.cardDescription,
            {
              width: '60%'
            }
          ]}
        >
          <Text
            size={ClubemberTheme.SIZES.BASE * .7}
            style={styles.cardTitle}
            color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
          >
            {`**** **** **** ${creditCard.substring(creditCard.length - 4)}`}
          </Text>
        </Block>
      </Block>
    </TouchableWithoutFeedback>
  );
};

export default ClubCreditCardItem;

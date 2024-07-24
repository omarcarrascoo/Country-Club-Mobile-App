import React, { FC, useState } from 'react';
import { Block, Text } from 'galio-framework';
import ClubCreditCardItem from '../../../../components/card/credit-card-item/credit-card-item';
import ClubButton from '../../../../components/general/buttons/button/button';
import styles from './styles';
import { ClubemberTheme } from '../../../../constants';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import { ScrollView } from 'react-native';

const PaymentMethods: FC<any> = ({ route, navigation }) => {
  const creditCards = [
    {
      type: 'master',
      number: '5253 4040 4059 0404'
    },
    {
      type: 'visa',
      number: '4000 4040 4059 3354'
    }
  ];
  if (route.params.new_card) {
    creditCards.push({
      type: route.params.new_card.brand,
      number: route.params.new_card.number
    });
  }

  const [creditCardSelected, setCreditCardSelected] = useState('');

  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <Block style={styles.subSection}>
            <ClubTitleCard flex white>
              Tarjetas guardadas
            </ClubTitleCard>
          </Block>

          <Block
            style={{
              paddingVertical: ClubemberTheme.SIZES.BASE_SECURE
            }}
          >
            {creditCards.map((card) => (
              <ClubCreditCardItem
                activeCard={creditCardSelected}
                white
                key={card.number}
                onSelect={(value) => setCreditCardSelected(value)}
                type={card.type as any}
                cardNumber={card.number}
              />
            ))}
          </Block>
          <Block middle row>
            <ClubButton
              style={styles.addPaymentButton}
              outline
              shadowless
              color={ClubemberTheme.COLORS.PRIMARY}
              onPress={() =>
                navigation.navigate('AccountStack', {
                  screen: 'NewPaymentMethod',
                  params: {
                    fromStack: 'AccountStack',
                    fromScreen: 'PaymentMethods'
                  }
                })
              }
              defaultButton
            >
              <Block row>
                <ClubIcon
                  style={{
                    marginEnd: ClubemberTheme.SIZES.BASE / 3,
                    marginTop: 1
                  }}
                  size={ClubemberTheme.SIZES.BASE * 1.2}
                  name={'plus'}
                  iconFamily={'entypo'}
                  color={ClubemberTheme.COLORS.ICON_DARK}
                />
                <Text
                  style={{
                    paddingHorizontal: ClubemberTheme.SIZES.BASE_SECURE / 2,
                    color: ClubemberTheme.COLORS.DEFAULT,
                    fontSize: ClubemberTheme.SIZES.BASE,
                    fontFamily: 'SanFrancisoLight'
                  }}
                >
                  Agregar metodo de pago
                </Text>
              </Block>
            </ClubButton>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default PaymentMethods;

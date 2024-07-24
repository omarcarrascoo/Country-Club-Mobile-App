import React, { FC, useCallback, useRef, useState } from 'react';
import CreditCardPic from '../../../../components/payment/credit-card-pic/credit-card-pic';
import { Block } from 'galio-framework';
import styles from './styles';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import ClubLabelForm from '../../../../components/form/label/label';
import { ClubemberTheme } from '../../../../constants';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubButton from '../../../../components/general/buttons/button/button';

const NewPaymentMethod: FC<any> = ({ navigation, addPaymentMethod, route }) => {
  const creditCardRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [fromScreen, _setFromScreen] = useState(route.params?.fromScreen);
  const [fromStack, _setFromStack] = useState(
    route.params?.fromStack || 'HomeStack'
  );

  const handleSubmit = useCallback(() => {
    if (creditCardRef?.current) {
      // @ts-ignore
      const { error, data } = creditCardRef.current.submit();
      if (!error) {
        // guardar data
        navigation.navigate(fromStack, {
          screen: fromScreen,
          params: {
            new_card: data
          }
        });
      }
    }
  }, []);

  const onValidStateChange = (validCard: boolean) => {
    setIsValid(validCard);
  };

  return (
    <Block style={styles.container}>
      <ScrollView
        keyboardDismissMode={'on-drag'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.section}
      >
        <Block>
          <ClubLabelForm
            size={ClubemberTheme.SIZES.BASE}
            text={'Información de tarjeta'}
          />
          <ClubInfoText>
            Ingresa los datos de la tarjeta que quieras guardar.
          </ClubInfoText>

          <Block>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'height' : 'height'}
              keyboardVerticalOffset={0}
              style={styles.containerCard}
            >
              <CreditCardPic
                onValidStateChange={onValidStateChange}
                creditCardRef={creditCardRef}
                onSubmit={addPaymentMethod}
              />
            </KeyboardAvoidingView>
          </Block>

          <Block middle>
            <ClubButton
              disabled={!isValid}
              shadowless
              color={
                !isValid
                  ? ClubemberTheme.COLORS.DISABLED
                  : ClubemberTheme.COLORS.PRIMARY
              }
              onPress={handleSubmit}
              defaultButton
            >
              Agregar
            </ClubButton>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

export default NewPaymentMethod;

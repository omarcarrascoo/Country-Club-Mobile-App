import * as React from 'react';
import * as yup from 'yup';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  PixelRatio
} from 'react-native';
import cardValidator from 'card-validator';
import * as Animatable from 'react-native-animatable';

import CardSide, { CardSideEnum } from './CardSide';
import CardInput from './CardInput';
import { PaymentIcon } from 'react-native-payment-icons';
import { ClubemberTheme } from '../../constants';
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

const validationSchema = yup.object().shape({
  holder: yup
    .string()
    .defined()
    .test(
      'is-valid-holder',
      'Nombre del titular es invalido',
      function (holderName: any) {
        const { runtime = false } = this.options.context as any;
        const { isPotentiallyValid, isValid } =
          cardValidator.cardholderName(holderName);
        return runtime ? isPotentiallyValid : isValid;
      }
    ),
  number: yup
    .string()
    .defined()
    .test(
      'is-valid-card-number',
      'Número de tarjeta es invalido',
      function (cardNumber: any) {
        const { runtime = false } = this.options.context as any;
        const { isPotentiallyValid, isValid } =
          cardValidator.number(cardNumber);
        return runtime ? isPotentiallyValid : isValid;
      }
    ),
  expiration: yup
    .string()
    .defined()
    .test(
      'is-valid-expiration',
      'Expiracion de la tarjeta es invalida',
      function (expiration: any) {
        const { runtime = false } = this.options.context as any;
        const { isPotentiallyValid, isValid } =
          cardValidator.expirationDate(expiration);
        return runtime ? isPotentiallyValid : isValid;
      }
    ),
  cvv: yup
    .string()
    .defined()
    .test('is-valid-cvv', 'CCV es invalido', function (cvv: any) {
      const { runtime = false } = this.options.context as any;
      const { isPotentiallyValid, isValid } = cardValidator.cvv(cvv);
      return runtime ? isPotentiallyValid : isValid;
    })
});

const Images: any = {
  chip: require('./images/chip.png'),
  icons: {
    rotate: require('./images/icons/rotate.png')
  }
};

export type CreditCardType = {
  submit: () => void;
};

interface CardData {
  number?: string;
  holder?: string;
  expiration?: string;
  cvv?: string;
  brand?: string;
}

interface CreditCardProps {
  placeholders?: {
    number?: string;
    holder?: string;
    expiration?: string;
    cvv?: string;
  };
  labels?: {
    holder?: string;
    expiration?: string;
    cvv?: string;
  };
  expirationDateFormat?: 'MM/YYYY' | 'MM/YY';
  initialValues?: CardData;
  background?: string | any;
  textColor?: string;
  placeholderTextColor?: string;
  errorTextColor?: string;
  onValidStateChange?: (cardDataIsValid: boolean, error: any) => void;
}

export interface SubmitResponse {
  error: yup.ValidationError | null;
  data: CardData;
}

const defaultCardConfig = {
  numberMask: '9999 9999 9999 9999',
  cvvMask: '999',
  type: null,
  brandName: ''
};

const CreditCard = forwardRef<CreditCardType, CreditCardProps>(
  (
    {
      placeholders,
      labels,
      background,
      textColor,
      errorTextColor,
      placeholderTextColor,
      initialValues,
      expirationDateFormat,
      onValidStateChange
    }: any,
    ref
  ) => {
    /** States */
    const [cardData, setCardData] = useState(initialValues);
    const [activeSide, setActiveSide] = useState(CardSideEnum.FRONT);
    const [cardConfig, setCardConfig] = useState(defaultCardConfig);
    const [errors, setErrors] = useState({
      number: false,
      holder: false,
      expiration: false,
      cvv: false
    });

    /** Animations Refs */
    const frontOpacityRef = useRef(new Animated.Value(1)).current;
    const backOpacityRef = useRef(new Animated.Value(0)).current;
    const rotationValue = useRef(new Animated.Value(0)).current;

    /** Input Refs */
    const numberInputRef = useRef(null);
    const holderInputRef = useRef(null);
    const expirationInputRef = useRef(null);
    const cvvInputRef = useRef(null);

    /** Other refs */
    const cardDataIsValid = useRef(false);

    /** Runtime Styles */
    const textStyle = { color: textColor };

    /** Animate Card (Rotate) */
    const rotate = useCallback(() => {
      const fadeAnimationConfig = (appearing: boolean) => ({
        toValue: appearing ? 1 : 0,
        duration: 200,
        useNativeDriver: true
      });

      const rotateAnimationConfig = (isAppearing: boolean) => ({
        toValue: isAppearing ? 1 : 0,
        duration: 400,
        useNativeDriver: true
      });

      const isFrontActive = activeSide === CardSideEnum.FRONT;
      Animated.parallel([
        Animated.timing(frontOpacityRef, fadeAnimationConfig(!isFrontActive)),
        Animated.timing(backOpacityRef, fadeAnimationConfig(isFrontActive)),
        Animated.timing(rotationValue, rotateAnimationConfig(isFrontActive))
      ]).start(() => {
        const newActiveSide = isFrontActive
          ? CardSideEnum.BACK
          : CardSideEnum.FRONT;
        setActiveSide(newActiveSide);
      });
    }, [activeSide, backOpacityRef, frontOpacityRef, rotationValue]);

    const expirationMask =
      expirationDateFormat === 'MM/YY' ? '99/99' : '99/9999';

    const validateField = useCallback((name: string, value: any) => {
      const values: any = { [name]: value };
      const response = {
        isPontentiallyValid: false,
        isValid: false,
        error: null
      };

      try {
        // Check potentially invalid... If has error, it is throwed...
        validationSchema.validateSyncAt(name, values, {
          context: { runtime: true }
        });
        response.isPontentiallyValid = true;

        // Check if is valid... If has error, it is throwed...
        validationSchema.validateSyncAt(name, values, {
          context: { runtime: false }
        });
        response.isValid = true;
      } catch (e) {
        let validationError: any = '';
        if (e) {
          validationError = e;
        }
        setErrors((prev) => ({
          ...prev,
          [name]: response.isPontentiallyValid ? false : validationError
        }));
      }

      return response;
    }, []);

    const loadCardConfig = (cardNumber: string) => {
      const { card = null } = cardValidator.number(cardNumber);
      if (!card) {
        setCardConfig({ ...defaultCardConfig });
        return;
      }

      const {
        type = '',
        code = { size: 0 },
        gaps = [],
        lengths = [],
        niceType = ''
      } = card;

      setCardData((prev: any) => ({
        ...prev,
        brand: type
      }));

      setCardConfig((prev: any) => {
        const maxLength = Math.max(...lengths);
        const maskChars = ''.padStart(maxLength, '9').split('');
        for (let i = 0; i < gaps.length; i += 1) {
          maskChars.splice((gaps[i] as number) + i, 0, ' ');
        }
        const numberMask = maskChars.join('');
        const cvvMask = ''.padStart(code.size, '9');
        return {
          ...prev,
          numberMask,
          cvvMask,
          type,
          brandName: niceType
        };
      });
    };

    const handleInputChange = useCallback(
      (name: string, text: string) => {
        setCardData((prev: any) => ({ ...prev, [name]: text }));
        const { isValid } = validateField(name, text);

        if (name === 'number') {
          loadCardConfig(text);
          if (isValid) {
            focusField(holderInputRef);
          }
        } else if (
          name === 'expiration' &&
          isValid &&
          text.length === expirationMask.length
        ) {
          focusField(cvvInputRef);
          rotate();
        }
      },
      [validateField, rotate, expirationMask]
    );

    const getSideStyle = useCallback(
      (side: any) => {
        const outputRange = side === CardSideEnum.FRONT ? [1, -1] : [-1, 1];

        return {
          transform: [
            {
              scaleX: rotationValue.interpolate({
                inputRange: [0, 1],
                outputRange
              })
            }
          ],
          opacity:
            side === CardSideEnum.FRONT ? frontOpacityRef : backOpacityRef,
          zIndex: side === activeSide ? 1 : 0
        };
      },
      [activeSide, backOpacityRef, frontOpacityRef, rotationValue]
    );

    const focusField = (field: any) => {
      if (!field || !field.current) return;
      field.current.focus();
    };

    const submit = useCallback(() => {
      const response: SubmitResponse = {
        error: null,
        data: cardData
      };
      try {
        validationSchema.validateSync(cardData, {
          context: { runtime: false },
          abortEarly: false
        });
      } catch (err: any) {
        response.error = err;
      }
      return response;
    }, [cardData]);

    useEffect(() => {
      if (cardDataIsValid.current !== undefined) {
        try {
          validationSchema.validateSync(cardData, {
            context: { runtime: false }
          });
          onValidStateChange(true);
        } catch (validationErrors) {
          onValidStateChange(false, validationErrors);
        }
      }
    }, [cardData, onValidStateChange]);

    useImperativeHandle(ref, () => ({ submit }));

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.cardWrapper}>
          <CardSide
            background={background}
            style={[[getSideStyle(CardSideEnum.FRONT)]]}
          >
            <View style={styles.header}>
              <TouchableOpacity onPress={rotate}>
                <Image source={Images.icons.rotate} />
              </TouchableOpacity>

              {!!cardConfig.type && (
                <Animatable.View
                  animation="slideInRight"
                  duration={400}
                  useNativeDriver
                >
                  <PaymentIcon type={cardConfig.type as any} />
                </Animatable.View>

                /*<Animatable.Image
                  source={cardConfig.brandImage}
                  animation="slideInRight"
                  duration={400}
                  useNativeDriver
                />*/
              )}
              {!!(!cardConfig.type && cardConfig.brandName) && (
                <Animatable.Text
                  style={[styles.textData, textStyle]}
                  animation="slideInRight"
                  duration={400}
                >
                  {cardConfig.brandName}
                </Animatable.Text>
              )}
            </View>

            <Image source={Images.chip} style={styles.imageChip} />

            <View>
              <CardInput
                placeholderTextColor={placeholderTextColor}
                name="number"
                onChange={handleInputChange}
                value={cardData?.number}
                autoFocus
                placeholder={placeholders.number}
                style={[
                  styles.textCardNumber,
                  { color: errors.number ? errorTextColor : textColor }
                ]}
                maxLength={cardConfig.numberMask.length}
                autocompleteType="cc-number"
                textContentType="creditCardNumber"
                maskProps={{
                  type: 'custom',
                  options: { mask: cardConfig.numberMask }
                }}
                refInput={numberInputRef}
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => focusField(holderInputRef)}
                blurOnSubmit={false}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.footer}>
              <View style={styles.holderWrapper}>
                <Text style={[styles.textLabel, textStyle]}>
                  {labels.holder}
                </Text>
                <CardInput
                  placeholderTextColor={placeholderTextColor}
                  name="holder"
                  autocompleteType="name"
                  textContentType="name"
                  returnKeyType="next"
                  onChange={handleInputChange}
                  placeholder={placeholders.holder}
                  autoCapitalize="characters"
                  style={[
                    styles.textData,
                    { color: errors.holder ? errorTextColor : textColor }
                  ]}
                  value={cardData?.holder}
                  refInput={holderInputRef}
                  onSubmitEditing={() => focusField(expirationInputRef)}
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.expirationWrapper}>
                <Text style={[styles.textLabel, textStyle]}>
                  {labels.expiration}
                </Text>
                <CardInput
                  placeholderTextColor={placeholderTextColor}
                  name="expiration"
                  autocompleteType="cc-exp"
                  keyboardType="numeric"
                  returnKeyType="next"
                  onChange={handleInputChange}
                  placeholder={placeholders.expiration}
                  style={[
                    styles.textData,
                    {
                      color:
                        errors.expiration &&
                        cardData.expiration.length === expirationMask.length
                          ? errorTextColor
                          : textColor
                    }
                  ]}
                  value={cardData?.expiration}
                  maxLength={7}
                  maskProps={{
                    type: 'custom',
                    options: { mask: expirationMask }
                  }}
                  refInput={expirationInputRef}
                  onSubmitEditing={() => {
                    focusField(cvvInputRef);
                    rotate();
                  }}
                  blurOnSubmit={false}
                />
              </View>
            </View>
          </CardSide>

          <CardSide
            style={[getSideStyle(CardSideEnum.BACK)]}
            background={background}
          >
            <View style={styles.strip} />
            <TouchableOpacity onPress={rotate}>
              <Image source={Images.icons.rotate} />
            </TouchableOpacity>
            <View style={styles.cvvWrapper} pointerEvents="box-none">
              <Text style={[styles.textLabel, textStyle]}>{labels.cvv}</Text>
              <CardInput
                placeholderTextColor={placeholderTextColor}
                name="cvv"
                autocompleteType="cc-csc"
                keyboardType="numeric"
                returnKeyType="done"
                onChange={handleInputChange}
                placeholder={placeholders.cvv}
                style={[
                  styles.textData,
                  { color: errors.cvv ? errorTextColor : textColor }
                ]}
                value={cardData?.cvv}
                maxLength={cardConfig.cvvMask.length}
                maskProps={{
                  type: 'custom',
                  options: { mask: cardConfig.cvvMask }
                }}
                onBlur={rotate}
                refInput={cvvInputRef}
              />
            </View>
          </CardSide>
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

CreditCard.defaultProps = {
  placeholders: {
    number: '0000 0000 0000 0000',
    holder: 'TITULAR DO CARTÃO',
    expiration: 'MM/YYYY',
    cvv: '000'
  },
  labels: {
    holder: 'TITULAR DO CARTÃO',
    expiration: 'VENCIMENTO',
    cvv: 'CÓD. SEGURANÇA'
  },
  expirationDateFormat: 'MM/YYYY',
  textColor: ClubemberTheme.COLORS.WHITE,
  placeholderTextColor: ClubemberTheme.COLORS.PLACEHOLDER,
  initialValues: {
    number: '',
    holder: '',
    expiration: '',
    cvv: '',
    brand: ''
  },
  errorTextColor: ClubemberTheme.COLORS.INPUT_ERROR,
  onValidStateChange: () => {}
};

const styles = StyleSheet.create({
  cardWrapper: {
    height: '100%',
    maxHeight: 220,
    position: 'relative',
    width: '100%',
    maxWidth: 350,
    shadowColor: 'rgba(0,0,0,0.6)',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  background: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  textLabel: {
    fontSize: 10 / PixelRatio.getFontScale(),
    textTransform: 'uppercase'
  },
  textData: {
    fontWeight: 'bold',
    fontSize: 16 / PixelRatio.getFontScale()
  },
  textCardNumber: {
    fontSize: 20 / PixelRatio.getFontScale(),
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    letterSpacing: 2
  },
  imageChip: {
    marginTop: 16
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  strip: {
    backgroundColor: 'rgba(0,0,0,.6)',
    position: 'absolute',
    left: 0,
    right: 0,
    marginTop: 48,
    height: 40
  },
  cvvWrapper: {
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 24
  },
  holderWrapper: {
    flex: 2,
    marginRight: 16
  },
  expirationWrapper: {
    flex: 1,
    alignItems: 'flex-end'
  }
});

export default CreditCard;

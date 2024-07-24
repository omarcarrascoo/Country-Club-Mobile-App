import React, { FC } from 'react';
import { Modal } from 'react-native';
import { TouchableWithoutFeedbackProps } from 'react-native/Libraries/Components/Touchable/TouchableWithoutFeedback';
import styles from './styles';
import { Block } from 'galio-framework';
import ClubIconButton from '../../buttons/icon-button/icon-button';
import { ClubemberTheme } from '../../../../constants';

interface IClubModalInformation extends TouchableWithoutFeedbackProps {
  show: boolean;
  withCloseButton?: boolean;
  onClose: () => void;
  bottom?: boolean;
}
const ClubModalInformation: FC<IClubModalInformation> = ({
  show,
  withCloseButton = false,
  onClose,
  bottom,
  ...props
}) => {
  return (
    bottom ? (
    <Block style={styles.bottomView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={onClose}
      >
        <Block style={styles.bottomView}>
          <Block style={styles.modalView}>
            {withCloseButton && (
              <Block bottom>
                <ClubIconButton
                  size={ClubemberTheme.SIZES.BASE * 1.6}
                  style={{
                    margin: 0,
                    position: 'absolute',
                    right: ClubemberTheme.SIZES.BASE * -0.8,
                    top: ClubemberTheme.SIZES.BASE * -0.8
                  }}
                  name={'cross'}
                  iconFamily="entypo"
                  onPress={onClose}
                  iconColor={ClubemberTheme.COLORS.PRIMARY}
                />
              </Block>
            )}
            {props.children}
          </Block>
        </Block>
      </Modal>
    </Block>
    ):(
      <Block style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={onClose}
      >
        <Block style={styles.centeredView}>
          <Block style={styles.modalView}>
            {withCloseButton && (
              <Block bottom>
                <ClubIconButton
                  size={ClubemberTheme.SIZES.BASE * 1.6}
                  style={{
                    margin: 0,
                    position: 'absolute',
                    right: ClubemberTheme.SIZES.BASE * -0.8,
                    top: ClubemberTheme.SIZES.BASE * -0.8
                  }}
                  name={'cross'}
                  iconFamily="entypo"
                  onPress={onClose}
                  iconColor={ClubemberTheme.COLORS.PRIMARY}
                />
              </Block>
            )}
            {props.children}
          </Block>
        </Block>
      </Modal>
    </Block>
    )
  );
};

export default ClubModalInformation;

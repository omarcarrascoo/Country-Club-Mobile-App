import React, {FC} from 'react';
import {Block, Text} from 'galio-framework';
import styles from "./styles";
import {ClubemberTheme} from "../../../constants";
import {INotificationItem} from "../../../interfaces/notification";
import ClubIcon from "../../general/buttons/icon/icon";
import { TouchableWithoutFeedback } from 'react-native';
import ClubInfoText from '../../general/info-text/info-text';

interface INotification {
    action: () => void;
    notification: any
}
const NotificationsList: FC<INotification> =  ({ action, notification }) => {

    return (
        <TouchableWithoutFeedback onPress={() => notification.Estado = true}>
            <Block
                row
                card
                flex
                middle
                
                space="between"
                style={notification.Estado === "Activa" ? styles.notificationItem : styles.notificationItemHighlighted}
            >
                <Block flex={0.20} middle>

                    <ClubIcon
                        style={{
                            // paddingVertical:
                            // ClubemberTheme.SIZES.BASE_SECURE,
                            paddingLeft: 25
                        }}
                        size={ClubemberTheme.SIZES.BASE * 1.8}
                        name={'calendar'}
                        iconFamily={'entypo'}
                        color={ClubemberTheme.COLORS.PLACEHOLDER}
                    />
                </Block>
                <Block flex={0.75} left middle style={styles.cardDescription}>
                    <Text
                        size={ClubemberTheme.SIZES.BASE * 0.625}
                        style={[
                            styles.cardSubTitle,
                            {
                                paddingTop: ClubemberTheme.SIZES.BASE_SECURE / 2
                            }
                        ]}
                        color={ClubemberTheme.COLORS.SUBTITLE_SHORT_CARD}
                    >
                        {/* {notification.dateTime} */}
                        22-JAN-2024
                    
                    </Text>
                    <Text
                        size={ClubemberTheme.SIZES.BASE}
                        style={styles.cardTitle}
                        color={ClubemberTheme.COLORS.DEFAULT}
                    >
                        {notification.Titulo}
                    </Text>
                    <ClubInfoText
                        size={18}
                        style={styles.cardDescription}
                    >
                        {notification.Descripcion}
                    </ClubInfoText>

                </Block>
            </Block>
        </TouchableWithoutFeedback>
    );
};

export default NotificationsList;

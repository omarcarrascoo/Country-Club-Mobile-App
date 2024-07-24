import React, {FC} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {theme} from "galio-framework";
import {ClubemberTheme, Images} from "../../constants";
import styles from "./styles";
import DoneTick from "../../../assets/images/done-tick.png";


const Success: FC<any> = ({ navigation }) => {

    return (
        <View style={{...styles.container, height: "100%", justifyContent: 'center',
            backgroundColor: '#298eb1'}}>
            <Image
                source={Images.DoneTick} style={styles.uploadImage}
            />
            <Text style={styles.text}>
                Sugerencia Recibida
            </Text>
        </View>
    // <Text>
    //     Sugerencia Recibida
    // </Text>
    );
};

export default Success;

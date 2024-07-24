import { StyleSheet } from 'react-native';
import {ClubemberTheme} from "../../constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 8,
        alignItems:'center',
        flexDirection: 'column',
    },

    uploadImage: {
        marginTop: "3%",
        width: "70%",
        height: 300,
        padding: "auto",
        justifyContent: 'center',
    },

    column:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',       //THIS LINE HAS CHANGED
        paddingLeft: 10,
    },

    text: {
        color: "white",
        fontSize: 30
    }
});

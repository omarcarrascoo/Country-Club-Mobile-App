import React, { FC, useState } from 'react';
import { Block } from 'galio-framework';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import ClubInputForm from "../../components/form-group/input/input";
import ClubSelectForm from "../../components/form-group/select/select";
import ClubButton from "../../components/general/buttons/button/button";
import {ClubemberTheme, Images} from "../../constants"
import ClubLabelForm from "../../components/form/label/label";
import * as ImagePicker from 'expo-image-picker';


// interface ImagePickerResult {
//     canceled: boolean;
//     uri?: any;
//   }

const Ayuda: FC<any> = ({ navigation }) => {
    const motivoList = [
        '1 motivo',
        '2 motivo'
    ];
    const durationOptions = [
        '1 Categoria',
        '2 Categoria',
        '3 Categoria',
        '4 Categoria',
        '5 Categoria',
    ];


    const [invitado, setInvitado] = useState(null);
    const [image, setImage] = useState<any>(null);

    const onEventSubmit = () => {
        navigation.navigate('Success', {
            screen: 'Success'
        })
    };
    const pickImage = async () => {
        try {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          console.log(result);
          
          if (!result.canceled) {
            console.log(result.assets[0]?.uri)
            setImage(result.assets[0]?.uri)
          }
        } catch (error) {
            
            
          console.error('Error picking an image', error);
        }
      };
      
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Block style={[styles.container]}>

                <Text style={{marginBottom: "10%", marginTop: "2%"}}>Su opinión es muy importante para nosotros.
                Realice sugerencias de nuestros servicios por este medio.</Text>

                <Block
                    row
                    style={styles.contentDetails}
                    space="between"
                >
                    <ClubSelectForm
                        label={'Categoria'}
                        options={durationOptions}
                        onSelect={(selectedItem:any) => {
                            setInvitado(selectedItem);
                        }}
                        placeholder={
                            'Selecione categoria de sugerencia.'
                        }
                    />
                </Block>

                <ClubLabelForm text={"Escriba su reporte o sugerencia"} noPadding />
                <TextInput
                    style={styles.input}
                    multiline={true}
                    underlineColorAndroid='transparent'
                />


                <ClubLabelForm text={"Escriba su reporte o sugerencia"} noPadding />


                {/* <Image
                    source={Images.Upload} style={styles.uploadImage}
                /> */}
                <TouchableOpacity onPress={pickImage} style={styles.uploadImageContainer} >
                {image ? (
                    <Image source={{ uri: image }} style={styles.uploadImage} />
                ) : (
                    <Image source={Images.Upload} style={styles.uploadImage} />
                )}
                </TouchableOpacity>
                <Block middle>
                    <ClubButton
                        disabled={!invitado}
                        shadowless
                        onPress={() => onEventSubmit()}
                        style={styles.sendButton}
                        defaultButton
                    >
                        Enviar
                    </ClubButton>
                </Block>
            </Block>
        </ScrollView>
    );
};

export default Ayuda;

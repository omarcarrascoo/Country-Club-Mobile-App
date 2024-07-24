import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import { ClubemberTheme } from '../../../../constants';
import ClubResumeCartCard from '../../../../components/delivery/resume-cart-card/resume-cart-card';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubSelectForm from '../../../../components/form-group/select/select';
import ClubContext from '../../../../context/context';
import { getFormatDate } from '../../../../services/utils';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';
import { postOrder } from '../../../../redux/deliveryRedux';
import ButtonCardSimple from '../../../../components/card/button-card-simple/button-card-simple';
import { getClubIntereses } from '../../../../redux/clubInfoRedux';
import { filterUserByEmail, getHijos, getUsers, patchUserById } from '../../../../redux/userRedux';


const InterestsDetail: FC<any> = ({ route, navigation }) => {
  const [interestOptions, setInterestOptions] = useState()
  const [sports, setSports] = useState<any>([])
  const {state, setUserData} = useContext(ClubContext)
  const [metodo, setMetodo] = useState("")
  const [formData, setFormData] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  const [resCode, setResCode] = useState()
  const [newInterests, setNewInterests] = useState({Deportes:[...state.user.Intereses]})


  const updateUser = async () => {
    try {
      if (state.auth.Rol === "Miembro") {
        const users = await getUsers();          
        const personalUser = filterUserByEmail(users, state.auth.Correo_Electronico);
        const userData:any = { ...personalUser[0] };
        await setUserData(userData);
      }
      else if (state.auth.Rol === "Hijo") {
        const users = await getHijos()
        const personalUser = filterUserByEmail(users, state.auth.Correo_Electronico)
        const userData:any = { ...personalUser[0] };
        await setUserData(userData);
      }
      else if(state.auth.Rol === "Conyuge"){
        const users = await getHijos()
        const personalUser = filterUserByEmail(users, state.auth.Correo_Electronico)
        const userData:any = { ...personalUser[0] };
        await setUserData(userData);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }    
  }
  
  const onSubmit = async () => {
    const sportIDs = newInterests.Deportes.map((interest: any) => {
      const sport = sports.find((s: any) => s.Nombre === interest.display_value);
      return sport ? sport.ID : null;
    }).filter((id: any) => id !== null);
    console.log("Sport IDs:", sportIDs);
    const res:any = await patchUserById({data:{Intereses:[...sportIDs]}},state.user.ID)
    setResCode(res.data.code)
    updateUser()
    setModalVisible(true);
  };  
console.log(sports);

  const deleateSport = async (sportIndex: number) => {
    const updatedInterests = [...newInterests.Deportes];
    updatedInterests.splice(sportIndex, 1); 
    setNewInterests({ ...newInterests, Deportes: updatedInterests });
  };

  const onSelectOption = (selectedOption: string) => {
    if (!newInterests.Deportes.some(item => item.display_value === selectedOption)) {
      const selectedSport = sports.find((sport:any) => sport.Nombre === selectedOption);
      if (selectedSport) {
        setNewInterests(prevInterests => ({
          ...prevInterests,
          Deportes: [...prevInterests.Deportes, { display_value: selectedSport.Nombre, ID: selectedSport.ID }]
        }));
      }
    }
  };

  useEffect(()=>{
    getInterests()
  },[])
  const getInterests = async() =>{
    const data = await getClubIntereses()
    const dataNames = data.map((item:any)=>{return(item.Nombre)})
    setSports(data)
    setInterestOptions(dataNames)
  }

  const closeModal = (data:any) => {
    if (resCode === 3000) {
        navigation.navigate(
            'HomeStack',
            {
              screen: 'Home',
            }
          )
        
    } else {
        navigation.navigate(
            'HomeStack',
            {
              screen: 'Home',
            }
          ) 
    }
    setModalVisible(!modalVisible);
  };
  const RenderModal: FC = () => {
    return (
      <>
      <Block>
        <ClubModalInformation
          show={modalVisible}
          onClose={() => setModalVisible(!modalVisible)}
        >
          {resCode === 3000 ?(
            <Block>
            <ClubTitleCard
              white
              center
              style={{
                paddingTop: ClubemberTheme.SIZES.BASE_SECURE
              }}
            >
              Intereses Actualizados
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
              Sus intereses han sido actualizados.
            </ClubInfoText>
            <Block middle>
              <ClubButton
                shadowless
                color={ClubemberTheme.COLORS.PRIMARY}
                onPress={closeModal}
                style={styles.reserveButton}
                defaultButton
              >
                Continuar
              </ClubButton>
            </Block>
          </Block>
          ):(
            <Block>
            <ClubTitleCard
              white
              center
              style={{
                paddingTop: ClubemberTheme.SIZES.BASE_SECURE
              }}
            >
              Error en Solicitud
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
                Ha habido un error al procesar su solicitud, intente mas tarde.
            </ClubInfoText>
            <Block middle>
              <ClubButton
                shadowless
                color={ClubemberTheme.COLORS.PRIMARY}
                onPress={closeModal}
                style={styles.reserveButton}
                defaultButton
              >
                Volver
              </ClubButton>
            </Block>
          </Block>
          )}
        </ClubModalInformation>
      </Block>
      </>
    );
  };
  return (
    <View>
      <Block style={styles.cartDetail}>
        <ScrollView>
          <Block>
            <Text style={styles.subTitle}>Añade un nuevo interés</Text>
            <ClubInfoText>Explora y añade un nuevo interés a tu lista</ClubInfoText>
          </Block>
          <Block row space='between' style={{marginTop: ClubemberTheme.SIZES.BASE_SECURE}}>
            <ClubSelectForm
                placeholder='Busca o selecciona un interés'
                options={interestOptions}
                onSelect={(item: string) => onSelectOption(item)}
            />
          </Block>
          <Block>
            <Text style={styles.subTitle}>Tus intereses</Text>
            <ClubInfoText>Edita tu lista de intereses</ClubInfoText>
                {newInterests.Deportes?.map((item:any, index:number)=>{
                    return(
                    <Block key={index} style={{marginBottom:15, borderWidth:.1, borderColor: ClubemberTheme.COLORS.DEFAULT}}>
                        <ButtonCardSimple
                        white
                        label={item.display_value}
                        icon={'trash'}
                        iconColor={ClubemberTheme.COLORS.WARNING}
                        iconFamily={'Feather'}
                        action={() =>
                            deleateSport(index)
                        }
                    />
                    </Block>
                    )
                })}
          </Block>
          <Block style={{width:"95%"}}>
         <ClubButton
            defaultButton
            onPress={()=>onSubmit()}
          >Guardar</ClubButton>
         </Block>
        </ScrollView>
      </Block>
      <RenderModal/>
    </View>
  );
};

export default InterestsDetail;

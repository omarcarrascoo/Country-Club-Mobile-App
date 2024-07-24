import React, { FC, useContext, useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import styles from './styles';
import { ScrollView } from 'react-native';
import { ClubemberTheme } from '../../constants';
import ClubMoneyCard from '../../components/card/money-card/money-card';
import ClubCardIconButton from '../../components/card/card-icon-button/card-icon-button';
import TransactionsHistory from '../../components/credits/transactions-history/transactions-history';
import ClubTitleCard from '../../components/general/title-card/title-card';
import ClubContext from '../../context/context';
import { FilterUserCreditById, FilterUserCreditByIdObject, getAbonosHistory, getCreditHistory } from '../../redux/creditRedux';
import { filterUserByEmail, getHijos, getUsers } from '../../redux/userRedux';
import { getTokenFromStorage } from '../../redux/setToken';

const Credits: FC<any> = (props) => {
  const { navigation } = props;
  const {state, setUserData, onLoading, updateAuthorization} = useContext(ClubContext)
  const [credits, setCreditos] = useState<any>({})
  const [abonos, setAbonos] = useState<any>({})
  const [allTransactions, setAllTransaction] = useState<any>({})
  const [reload, setReload] = useState<any>(false)

  const getAllCreditHistory = async () =>{
    const creditData = await getCreditHistory();
    const abonosData = await getAbonosHistory()      
    const filtererCreditData = FilterUserCreditById(state.user.ID, creditData)
    const filterAbonoData = FilterUserCreditByIdObject(state.user.ID, abonosData)
    setCreditos(filtererCreditData)
    setAbonos(filterAbonoData)
  }
  const limite = state.user.Credito_Asignado? (state.user.Credito_Asignado ): (state.user.Limite_de_Credito- state.user.Saldo_a_pagar_Creditos )
  console.log(state.user);
  
  useEffect(()=>{
    getAllCreditHistory()
  },[])

  useEffect(()=>{
    getAllCreditHistory()
  },[reload])
  
  useEffect(() =>{
    function convertToDate(str:any) {
      const parts = str.split(/[- :]/);
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames.indexOf(parts[1]);
      return new Date(parts[2], month, parts[0], parts[3], parts[4], parts[5]);
    }
    try {
      const allTransactions = [...credits, ...abonos];
      const compareDates:any = allTransactions.sort((a, b) => {
          const dateA:any = convertToDate(a.Added_Time);
          const dateB:any = convertToDate(b.Added_Time);
          return dateA - dateB;
      });
      setAllTransaction(compareDates)
    } catch (error) {
      console.log(error); 
    }
  },[credits,abonos])
  useEffect(() => {
    onLoading(true)
      const updateToken = async () => {
        const newToken: any = await getTokenFromStorage();
        const zohoToken = 'Zoho-oauthtoken ' + newToken;
        updateAuthorization(zohoToken);
      };
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
    updateToken();
    updateUser()
    // oneSignalStatus()
  }, []);
  return (
    <Block flex style={styles.container}>
      <Block flex center style={styles.events}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.section}
        >
          <Block style={styles.subSection}>
            <ClubTitleCard flex white>
              Saldo disponible
            </ClubTitleCard>
          </Block>

          <Block row>
            <ClubMoneyCard
              action={() => null}
              value={state.user.Limite_de_Credito? limite.toString() : "0.00"}
              titleSize={ClubemberTheme.SIZES.BASE * 2}
            />
          </Block>

          {state.auth.Rol !== "Conyuge"&&state.auth.Rol !== "Hijo"?(
            <Block style={styles.subSection}>
            <ClubCardIconButton
              white
              action={() =>
                navigation.navigate('HomeStack', {
                  screen: 'AssignCredit'
                })
              }
              icon={'credit'}
              iconFamily={'entypo'}
              label={'Asignar crédito'}
            />
          </Block>
          ):(
            <></>
          )}

          <TransactionsHistory
            action = {()=>{
              setReload(!reload)
            }}
            style={styles.subSection}
            // events={credits}
            events={allTransactions}
            title={'Historial'}
            {...props}
            white
          />
        </ScrollView>
      </Block>
    </Block>
  );
};

export default Credits;

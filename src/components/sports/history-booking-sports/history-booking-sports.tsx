import React, { FC, useContext, useEffect, useState } from 'react';
import ClubTitleCard from '../../general/title-card/title-card';
import { Block } from 'galio-framework';
import { heightScreen } from '../../../constants/utils';
import { PeriodOptions } from '../../../interfaces/events';
import ClubInputSelect from '../../form/select-dropdown/select-dropdown';
import { ScrollView } from 'react-native';
import { ClubHorizontalCard } from '../../card/horizontal-card/horizontal-card';
import { ClubemberTheme } from '../../../constants';
import { ISportsBookingList } from '../../../interfaces/sports';
import ClubModalInformation from '../../general/modal/modal-information/modal-information';
import ClubInfoText from '../../general/info-text/info-text';
import ClubButton from '../../general/buttons/button/button';
import styles from '../../../screens/events/screens/event-reservation/styles';
import ClubContext from '../../../context/context';
import { sportReservations } from '../../../redux/eventosRedux';
import { eliminarReserva, getReservas } from '../../../redux/reservasRedux';
import { filterDataByCorreo } from '../../../services/utils';

interface IHistoryBookingSportsSection {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: ISportsBookingList;
}
const HistoryBookingSportsSection: FC<IHistoryBookingSportsSection> = ({
  white = false,
  navigation,
  title,
  events
}) => {
  const { onLoading, state } = useContext(ClubContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [reservations, setReservations] = useState<any>([])
  const [resCode, setResCode] = useState(0)
  const [idDel, setIdDel] = useState()
  const [toDeleteItem, setToDeleteItem] = useState<any>(
    null
  );

  const setAllSportsData = async () =>{
    const reservationsData:any = await sportReservations()
    const filterReservations = filterDataByCorreo(state.auth.Correo_Electronico, reservationsData)
    setReservations(filterReservations)
    onLoading(false);
  }

  useEffect(()=>{
    setAllSportsData()
  },[])

  const closeModal = async (id:any) => {
    setModalVisible(false)
    onLoading(true);
    try {
      const delateReservation = await eliminarReserva(id)
      setResCode(delateReservation)
      const filtered = reservations?.filter(
      (card:any) => card.ID !== id
      );
      // setAllSportsData()
      setReservations(filtered)
      setModalVisible(false)
    } catch (error) {
      console.log(error);
      setResCode(0)
    }
    onLoading(false);
  };

  const eventCategories = [
    'Cualquier periodo',
    PeriodOptions.RECIENTES,
    PeriodOptions.ANTIGUOS
  ];

  return (
    <Block
      flex
      style={[
        {
          paddingBottom: ClubemberTheme.SIZES.BASE_SECURE
        }
      ]}
    >
      <ClubTitleCard flex white={white}>
        {title}
      </ClubTitleCard>

      <ClubInputSelect
        style={{
          maxWidth: '65%'
        }}
        onSelect={(selectedItem) => {
          if (selectedItem === 'Cualquier periodo') {
            setReservations(events);
            return;
          }
          const filtered = reservations?.filter((_card:any, index:any) =>
            selectedItem === PeriodOptions.RECIENTES ? index <= 1 : index > 1
          );
          // setReservations(filtered);
          setAllSportsData()
        }}
        options={eventCategories}
        placeholder={'Seleccionar periodo'}
      />

      <Block
        flex
        style={{
          maxHeight: heightScreen / 1.35
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
          <Block
            row
            space="between"
            style={{
              gap: ClubemberTheme.SIZES.BASE_SECURE / 2,
              flexWrap: 'wrap'
            }}
          >
            {
              reservations.length >= 1?(
                reservations?.map((item:any, index:any) => {
                  return (
                    <ClubHorizontalCard
                      key={index}
                      isRequest
                      location={item.Salidas_Disponibles}
                      white={white}
                      date={item.Fecha_a_Reservar}
                      // price={"60.999"}
                      hour={`${item["Deportes.Hora_Inicio"]} - ${item["Deportes.Hora_Fin"]}`}
                      description='Tu reserva deportiva'
                      title={item.Deportes.display_value}
                      sportId={item.Deportes.ID}
                      withActions={true}
    
                      actionEdit={() =>
                        // navigation.navigate(item.navigation.stack, {
                        //   screen: item.navigation.screen,
                        //   params: { ...item, toEdit: true }
                        // })
                        {console.log("To be implemented");}
                      }
                      actionDelete={() => {
                        setToDeleteItem(item);
                        setIdDel(item.ID)
                        setModalVisible(!modalVisible);
                      }}
                      action={() =>
                        // navigation.navigate(item.navigation.stack, {
                        //   screen: item.navigation.screen,
                        //   params: { ...item, toEdit: true }
                        // })
                        {console.log("To be implemented");}
                        
                      }
                    />
                  );
                })
              ):(
                <ClubInfoText>No tienes reservaciones por el momento</ClubInfoText>
              )
            }

            <Block>
              <ClubModalInformation
                show={modalVisible}
                onClose={() => setModalVisible(!modalVisible)}
                withCloseButton
              >
                <Block>
                  <ClubTitleCard
                    white
                    center
                    style={{
                      paddingTop: ClubemberTheme.SIZES.BASE_SECURE
                    }}
                  >
                    ¿Eliminar reserva?
                  </ClubTitleCard>
                  <ClubInfoText
                    style={{
                      textAlign: 'center'
                    }}
                  >
                    Estás a punto de cancelar tu reserva {toDeleteItem?.title}{' '}
                    para el {toDeleteItem?.Fecha_a_Reservar} en la {toDeleteItem?.Salidas_Disponibles}.
                  </ClubInfoText>
                  <Block middle>
                    <ClubButton
                      shadowless
                      color={ClubemberTheme.COLORS.INPUT_ERROR}
                      onPress={()=>closeModal(idDel)}
                      style={styles.reserveButton}
                      defaultButton
                    >
                      Eliminar
                    </ClubButton>
                  </Block>
                </Block>
              </ClubModalInformation>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HistoryBookingSportsSection;

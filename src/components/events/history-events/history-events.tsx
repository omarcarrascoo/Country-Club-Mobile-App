import React, { FC, useContext, useEffect, useState } from 'react';
import ClubTitleCard from '../../general/title-card/title-card';
import { Block } from 'galio-framework';
import { heightScreen } from '../../../constants/utils';
import { IEventsList, PeriodOptions } from '../../../interfaces/events';
import ClubInputSelect from '../../form/select-dropdown/select-dropdown';
import { ScrollView } from 'react-native';
import { ClubHorizontalCard } from '../../card/horizontal-card/horizontal-card';
import { ClubemberTheme } from '../../../constants';
import ClubContext from '../../../context/context';
import { getEvents } from '../../../redux/eventosRedux';
import { filterDataByCorreo, filterDataByCorreo2, filterDataByUserId } from '../../../services/utils';

interface IHistoryEventsSection {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: IEventsList[];
}
const HistoryEventsSection: FC<IHistoryEventsSection> = ({
  white = false,
  navigation,
  title,
  events
}) => {
  const [eventsList, setEventsList] = useState(events);
  const [reservas, setReservas] = useState<any>([])
  const [filterBy, setFilterBy] = useState()
  const { onLoading, state } = useContext(ClubContext);
  const eventCategories = [
    PeriodOptions.RECIENTES,
    PeriodOptions.ANTIGUOS
  ];
  function convertToDate(dateString: string) {
    const months:any = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    console.log(dateString);
    
    const [day, month, year]:any = dateString.split('-');
    const monthIndex = months[month];
    const DataDate = new Date(year, monthIndex, day);
    console.log(DataDate);
    
    return new Date(year, monthIndex, day);
  }
  const filterDataAsc=()=>{    
    try {
      const compareDates:any = [...reservas].sort((a:any, b:any) => {
      const dateA:any = convertToDate(a.Dia_de_Reserva);
      const dateB:any = convertToDate(b.Dia_de_Reserva);
      return dateA - dateB;
    });
    console.log(compareDates.map((item:any) => item.Dia_de_Reserva));
    setReservas(compareDates)
    } catch (error) {
      console.log(error);
    }
  }
  const filterDataDesc=()=>{
    try {
      const compareDates:any = [...reservas].sort((a:any, b:any) => {
      const dateA:any = convertToDate(a.Dia_de_Reserva);
      const dateB:any = convertToDate(b.Dia_de_Reserva);
      return dateB - dateA;
    });
    
    setReservas(compareDates)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    onLoading(true)
    const setAllMedia =async () => {
      const reservationData:any = await getEvents()
      const resReservFiltered = filterDataByCorreo2(state.auth.Correo_Electronico, reservationData);
      setReservas(resReservFiltered)
      onLoading(false)
    }
    setAllMedia()
  }, [])
  useEffect(() => {
    console.log(filterBy);
    
    if (filterBy === "Mas Recientes") {
      filterDataAsc()
    }
    else if (filterBy === "Mas antiguos") {
      filterDataDesc()
    } else {
      console.log("No hay filtro");
      
    }
  },[filterBy])
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
          setFilterBy(selectedItem)
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
            {reservas?.map((item:any, index:any) => {
              return (
                <ClubHorizontalCard
                  key={index}
                  isRequest
                  location={'Casa Club'}
                  white={white}
                  date={item.Fecha}
                  description={item.Comentarios}
                  price={item.price}
                  hour={item.Hora_Inicio}
                  title={item.Media.display_value}
                  // amenidadId={item.Amenidades.ID}
                  action={()=>{console.log("Click");
                  }}
                />
              );
            })}
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default HistoryEventsSection;

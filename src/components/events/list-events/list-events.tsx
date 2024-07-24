import React, { FC, useEffect, useState } from 'react';
import ClubTitleCard from '../../general/title-card/title-card';
import { Block } from 'galio-framework';
import ClubMediumCard from '../../card/medium-card/medium-card';
import { heightScreen } from '../../../constants/utils';
import {
  CategoryOptions,
  IEventsList
} from '../../../interfaces/events';
import { ScrollView } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import ClubSelectForm from '../../form-group/select/select';
import { getMedia } from '../../../redux/eventosRedux';
import { getClubIntereses } from '../../../redux/clubInfoRedux';

interface IListEventsSection {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: IEventsList[];
}
const ListEventsSection: FC<IListEventsSection> = ({
  white = false,
  navigation,
  title,
  style,
  events
}) => {
  const [eventsList, setEventsList] = useState(events);
  const [media, setMedia] = useState<any>([])
  const [categories, setCategories] = useState([])
  const [CategoryPicked, setCategoryPicked] = useState("Todos los eventos")
  const setAllMedia =async () => {
    const mediaData:any = await getMedia()   
    console.log(mediaData); 
    setMedia(mediaData) 
  }
  const setMediaByCategory = async () =>{
    const data:any = await getMedia()
        const filterProducts = data.filter((item:any)=>item.Cate.display_value === CategoryPicked)
        setMedia(filterProducts)
  }
  const setAllCategories = async () =>{
    const categoriesData:any = await getClubIntereses()
    const categoriesNames = categoriesData.map((item:any, key:any)=>{
      return(item.Nombre)
    })
    categoriesNames.unshift("Todos los eventos")
    setCategories(categoriesNames)
  }

  useEffect(()=>{
    setAllMedia()
    setAllCategories()
  }, [])
  useEffect(() =>{
    if (CategoryPicked === "Todos los eventos") {
        setAllMedia()
    } else {
        setMediaByCategory() 
    }
}, [CategoryPicked])

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

      <ClubSelectForm
        style={{
          width: '65%'
        }}
        options={categories}
        onSelect={(selectedItem:any) => {
          setCategoryPicked(selectedItem)
        }}
        placeholder={'Seleccionar categoria'}
      />

      <Block
        flex
        style={{
          maxHeight: heightScreen / 1.35
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>
          <Block
            flex
            row
            space="between"
            style={{
              gap: ClubemberTheme.SIZES.BASE_SECURE / 2,
              flexWrap: 'wrap'
            }}
          >
            {media?.map((item:any, index:any) => {
              return (
                <ClubMediumCard
                  original={true}
                  key={index}
                  white={white}
                  date={item.date}
                  description={item.Descripcion}
                  price={item.Precio}
                  hour={item.Hora}
                  title={item.Nombre}
                  image={item.Image}
                  action={() =>
                    navigation.navigate(
                      item.navigation.stack,
                      {
                        screen: item.navigation.screen,
                        params: { ...item }
                      }
                    )
                  }
                />
              );
            })}
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default ListEventsSection;

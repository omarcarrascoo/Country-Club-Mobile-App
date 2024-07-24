import React, { FC, useContext, useEffect, useState } from 'react';
import {Block} from 'galio-framework';
import styles from './styles';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ClubTitleCard from '../../components/general/title-card/title-card';
import {Icon} from "../../components";
import SpaceBookings from "../../components/sports/space-bookings/space-bookings";
import {ProductListStore} from "../../constants/bookings-store";
import {ClubemberTheme, EventsListStore} from "../../constants";
import ListEventsSection from "../../components/events/list-events/list-events";
import ListProductsSection from "./list-products/list-products";
import {RestaurantStore, TiendaStore} from "../../constants/restaurant-store";
import ClubInputSelect from "../../components/form/select-dropdown/select-dropdown";
import ClubModalInformation from '../../components/general/modal/modal-information/modal-information';
import ClubInfoText from '../../components/general/info-text/info-text';
import ClubButton from '../../components/general/buttons/button/button';
import ClubSelectForm from '../../components/form-group/select/select';
import ClubHeaderDelivery from '../../components/delivery/delivery-header/delivery-header';
import axios from 'axios';
import { BASE_URL, tokenAuth, userRequest } from '../../redux/requestMethods';
import { getTokenFromStorage } from '../../redux/setToken';
import { getProducts, getProductsCategories } from '../../redux/productRedux';
import DeliveryCategoryIconPicker from '../../components/delivery/category-icon-picker/category-icon-piket';
import ClubContext from '../../context/context';

const Delivery: FC<any> = (props) => {
    const hourRangesStart: any = [
        'Entrega a mi domicilio',
        'Entrega en parque infantil',
        'Recoger en restaurate',
        'Recoger en resepción',
        'Entrega a otro domicilio',
      ];
    const [deliveryOption, setDeliveryOption] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [categories, setCategories] = useState()
    const { onLoading } = useContext(ClubContext);
    const closeModal = () => {
        setModalVisible(!modalVisible);
      };
      const onDirectionSelect = () => {
        setModalVisible(!modalVisible);
      };
    
    const [products, setProducts] = useState([]);
    const setAllData = async() => {
      onLoading(true);
      const dataProducts = await getProducts()
      const dataCategories = await getProductsCategories()
      setProducts(dataProducts)
      setCategories(dataCategories)
      onLoading(false);
    }
    useEffect(() => {

      setAllData()
    }, []);
    const RenderModal: FC = () => {
        return (
          <Block>
            <ClubModalInformation
              show={modalVisible}
              onClose={() => setModalVisible(!modalVisible)}
            >
              <Block>
                <ClubTitleCard
                  white
                  center
                  style={{
                    paddingTop: ClubemberTheme.SIZES.BASE_SECURE
                  }}
                >
                  Seleccione el punto de entrega
                </ClubTitleCard>
                <ClubInfoText
                  style={{
                    textAlign: 'center'
                  }}
                >
                  <ClubSelectForm
              defaultValue={deliveryOption}
              style={{
                width: '100%', margin: 0
              }}
              options={hourRangesStart}
              onSelect={(selectedHourRange:any) => {
                setDeliveryOption({
                  ...deliveryOption,
                  option: selectedHourRange
                });
              }}
              placeholder={'Puntos de entrega disponibles'}
            />
                </ClubInfoText>
                <Block middle>
                  <ClubButton
                    shadowless
                    color={ClubemberTheme.COLORS.PRIMARY}
                    onPress={closeModal}
                    style={styles.reserveButton}
                    defaultButton
                  >
                    Cancelar
                  </ClubButton>
                </Block>
              </Block>
            </ClubModalInformation>
          </Block>
        );
      };
    return (
        <Block flex style={styles.container}>
            <Block flex center style={styles.events}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.section}
                >
                    <ClubHeaderDelivery {...props}/>
                    <DeliveryCategoryIconPicker title='Buscar Productos' list={categories} white style={styles.bookings} {...props}/>
                    <ListProductsSection
                        products={products}
                        white
                        {...props}
                        title={'Restaurante'}
                    />

                    <ListProductsSection
                        products={products}
                        white
                        {...props}
                        title={'Tienda'}
                    />
                    <RenderModal/>
                </ScrollView>
                
            </Block>
        </Block>
    );
};

export default Delivery;

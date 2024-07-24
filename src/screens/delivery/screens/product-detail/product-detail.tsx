import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubBackground from '../../../../components/general/backgrounds/club-background';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import ClubInfoText from '../../../../components/general/info-text/info-text';
import ClubIcon from '../../../../components/general/buttons/icon/icon';
import { ClubemberTheme } from '../../../../constants';
import { FamilyType } from '../../../../interfaces/types';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubCounterInput from '../../../../components/form-group/counterInput/counterInput';
import ClubSelectForm from '../../../../components/form-group/select/select';
import ClubInputText from '../../../../components/form/input-text/input-text';
import ClubContext from '../../../../context/context';
import ClubModalInformation from '../../../../components/general/modal/modal-information/modal-information';


const ProductDetail: FC<any> = ({ route, navigation, onEdit, arrayPosition }) => {
  const dataProduct = {...route.params}  
  const [modalVisible, setModalVisible] = useState(false);
  const {state, updateOrder} = useContext(ClubContext)
  const [cantidad, setCantidad] = useState(1)
  const [comentarios, setComentarios] = useState("")
  const [opcion, setOpcion] = useState("")
  const [formData, setFormData] = useState({plato: dataProduct.params.ID, Cantidad: cantidad, Comentarios:"", precioTotalItems: 0})
  var precio:any  = cantidad * parseFloat(dataProduct.params.Precio)
  
  var total = parseFloat(precio) + parseFloat(state.order.Precio_Total)

  onEdit = dataProduct.params.onEdit;

  const onReserve = () => {
    try {
      updateOrder({...state.order, Detalle_de_su_orden:[...state.order.Detalle_de_su_orden, {...formData}], Precio_Total: total})
      setModalVisible(true)
    } catch (error) {
      console.log(error);
      
    }
  };
  const EditOrder = () =>{
    const orderDetail = [...state.order.Detalle_de_su_orden]    
    orderDetail.splice(dataProduct.params.index, 1) 
    updateOrder({...state.order, Detalle_de_su_orden:[...orderDetail, {...formData}], Precio_Total: total})
    setModalVisible(true)
  }
  const closeModal = (data:any) => {
    navigation.navigate(
      'Delivery',
      {
        screen: 'Delivery',
      }
    )
    setModalVisible(!modalVisible);
  };
  
  
  
  useEffect(() => {
    setFormData({plato: dataProduct.params.ID, Cantidad: cantidad, Comentarios:`${opcion} ${comentarios}`, precioTotalItems: precio });
  }, [comentarios, cantidad, opcion]);


  const productOptions:any = dataProduct.params.Opciones?.map((option:any)=> option.display_value)
  const RenderModal: FC = () => {
    return (
      <>
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
              Producto añadido correctamente
              </ClubTitleCard>
              <ClubInfoText
                style={{
                  textAlign: 'center'
                }}
              >
              Para terminar su compra dirijase al carrito
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
        </ClubModalInformation>
      </Block>
      </>
    );
  };
  const DetailSection: FC<{
    title: string;
    icon?: string;
    iconFamily?: FamilyType;
  }> = ({ title, icon, iconFamily = 'antdesign' }) => (
    <Block style={styles.detail} row>
      {icon &&
        <ClubIcon
        style={{
          marginEnd: ClubemberTheme.SIZES.BASE / 3,
          marginTop: 1
        }}
        size={ClubemberTheme.SIZES.BASE * 0.9}
        name={icon}
        iconFamily={iconFamily}
        color={ClubemberTheme.COLORS.ICON}
      />
      }
      <Text
        size={ClubemberTheme.SIZES.BASE * 0.75}
        color={ClubemberTheme.COLORS.TEXT_GRAY_DARK}
      >
        {title}
      </Text>
    </Block>
  );
      
  return (
    onEdit === true?(
    <ClubBackground
      imageStyle={styles.imageStyle}
      image={dataProduct.params.Foto}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        // bounces={false}
      >
        <Block style={[styles.container]}>
          <Block>
            <ClubTitleCard white>
              Editar - {dataProduct.params.Nombre}
            </ClubTitleCard>
          </Block>

          <Block>
            <View style={styles.line} />
          </Block>
          <Block
            middle
            style={styles.contentDetails}
            space="between"
          >
            <DetailSection
              title={dataProduct.params.Descripcion}
            />
            <DetailSection
              icon={'money'}
              iconFamily={'Font-Awesome'}
              title={dataProduct.params.Precio}
            />
          </Block>

          <Block>
            <View
              style={[
                styles.line,
                {
                  marginBottom:
                    ClubemberTheme.SIZES.BASE_SECURE * 1.5
                }
              ]}
            />
          </Block>

          {(productOptions && productOptions?.length > 0) &&(
            <Block>
            <Text style={styles.subTitle}>
              Opciones del producto
            </Text>
            <ClubSelectForm
              onSelect={(item:any)=>{
                setOpcion(item) 
              }}
              options={productOptions}
              placeholder={'Opciones para el producto'}
            />
            <Text style={styles.subTitle}>
                Notas Adicionales
              </Text>
              <ClubInputText
                multiline
                placeholder='Escribe instrucciones sobre este producto'
                style={{height:150}}
                onChange={(item:any)=>{
                  setComentarios(item)
                }}
              />
          </Block>
          )}
          <Block row center space='between'>
            <ClubCounterInput
              defaultValue
              setItems={setCantidad}
              center={true}
              valores={dataProduct.params.editData.Cantidad}
            />
            <ClubButton
              shadowless
              onPress={() => EditOrder()}
              style={styles.reserveButton}
              defaultButton
            >
              Agregar
            </ClubButton>
          </Block>
        </Block>
      </ScrollView>
      <RenderModal/>
    </ClubBackground>
    ):(
      <ClubBackground
      imageStyle={styles.imageStyle}
      image={dataProduct.params.Foto}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        // bounces={false}
      >
        <Block style={[styles.container]}>
          <Block>
            <ClubTitleCard white>
              {dataProduct.params.Nombre}
            </ClubTitleCard>
          </Block>

          <Block>
            <View style={styles.line} />
          </Block>

          <Block
            middle
            style={styles.contentDetails}
            space="between"
          >
            <DetailSection
              title={dataProduct.params.Descripcion}
            />
            <DetailSection
              icon={'money'}
              iconFamily={'Font-Awesome'}
              title={dataProduct.params.Precio}
            />
          </Block>

          <Block>
            <View
              style={[
                styles.line,
                {
                  marginBottom:
                    ClubemberTheme.SIZES.BASE_SECURE * 1.5
                }
              ]}
            />
          </Block>

          {(productOptions && productOptions?.length > 0)  &&(
            <Block>
            <Text style={styles.subTitle}>
              Opciones del producto
            </Text>
            <ClubSelectForm
              onSelect={(item:any)=>{
                setOpcion(item) 
              }}
              options={productOptions}
              placeholder={'Opciones para el producto'}
            />
            <Text style={styles.subTitle}>
                Notas Adicionales
              </Text>
              <ClubInputText
                multiline
                placeholder='Escribe instrucciones sobre este producto'
                style={{height:150}}
                onChange={(item:any)=>{
                  setComentarios(item)
                }}
              />
          </Block>
          )}
          <Block row center space='between'>
            <ClubCounterInput
              setItems={setCantidad}
              center={true}
              valores={1}
            />
            <ClubButton
              shadowless
              onPress={() => onReserve()}
              style={styles.reserveButton}
              defaultButton
            >
              Agregar
            </ClubButton>
          </Block>
        </Block>
      </ScrollView>
      <RenderModal/>
    </ClubBackground>
    )
  );
};

export default ProductDetail;

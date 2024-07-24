import React, { FC, useContext, useEffect, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ClubIcon from '../../general/buttons/icon/icon';
import ClubInfoText from '../../general/info-text/info-text';
import ClubButton from '../../general/buttons/button/button';
import { ClubemberTheme } from '../../../constants';
import { getProductbyId } from '../../../redux/productRedux';
import { parse } from 'react-native-svg';
import ClubContext from '../../../context/context';

const ClubProductCartCard: FC<any> = ({ arrayPosition, route, navigation, productId, comentarios, cantidad, positionArray, editData }) => {
    const [product, setProduct] = useState<any>()
    const {state, updateOrder} = useContext(ClubContext)
    useEffect(()=>{
        const getProduct = async () => {
            try {
                const data = await getProductbyId(productId)
                
                setProduct(data)
            } catch (error) {
                console.error(error);
            }
        }
        getProduct()
    },[])

    const onDelete = (key:any) => {
        if (key >= 0 && key < state.order.Detalle_de_su_orden.length) {
            let data:any = state.order.Detalle_de_su_orden
            data.splice(key, 1);
            var totalPrice = 0
            for (let i = 0; i < data.length; i++) {
                totalPrice += data[i].precioTotalItems;
              }
            console.log(totalPrice);
            
            updateOrder({...state.order, Detalle_de_su_orden:[...data], Precio_Total: totalPrice})
          }
    }
    
    var precio = parseFloat(cantidad) * parseFloat(product?.Precio)
  return (
      <Block style={styles.productDetail} row>
        <Block row>
        <Block style={styles.section}>
            <Text style={styles.counter}>
                x{cantidad}
            </Text>
        </Block>
        <Block style={styles.section}>
            <Text style={styles.title}>{product?.Nombre}</Text>
            <Block>
                <Text style={styles.subTitle}>Notas Adicionales</Text>
                <ClubInfoText style={{paddingBottom: 0, margin: 0}}>{comentarios}</ClubInfoText>
            </Block>
        </Block>
        </Block>
        <Block  style={styles.section2}>
            <Text style={styles.price} >${precio.toFixed(2)}</Text>
            <Block row center gap={10}>
                <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate(
                            'ProductDetail',
                            {
                              screen: 'ProductDetail',
                              params: { ...product, onEdit:true, editData:{...editData}, index:arrayPosition}
                            }
                          )
                    }}
                >
                    <Text style={styles.editBtn} >Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>onDelete(positionArray)}>
                    <ClubIcon
                        iconFamily='Feather'
                        name='trash'
                        color={ClubemberTheme.COLORS.ERROR}
                        size={ClubemberTheme.SIZES.BASE * 1.2}
                    />
                </TouchableOpacity>
            </Block>
        </Block>
        
      </Block>
  );
};

export default ClubProductCartCard;
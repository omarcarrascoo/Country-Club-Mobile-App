import React, { FC, useContext, useEffect } from 'react';
import { Block, Text } from 'galio-framework';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import ClubTitle from '../../../../components/general/title/title';
import ClubTitleCard from '../../../../components/general/title-card/title-card';
import { ClubemberTheme } from '../../../../constants';
import ClubProductCartCard from '../../../../components/delivery/product-cart-card/product-cart-card';
import ClubDirectionCard from '../../../../components/delivery/direction-card/direction-card';
import ClubResumeCartCard from '../../../../components/delivery/resume-cart-card/resume-cart-card';
import ClubButton from '../../../../components/general/buttons/button/button';
import ClubContext from '../../../../context/context';
import ClubInfoText from '../../../../components/general/info-text/info-text';


const CartDetail: FC<any> = (props) => {
  const {state} = useContext(ClubContext)
  return (
    <View>
      <Block style={styles.cartDetail}>
        <ScrollView>
          <Block>
            <Text style={styles.subTitle}>Mi pedido</Text>
            <ScrollView style={styles.orderDetail} showsVerticalScrollIndicator = {false}>
              {state.order.Detalle_de_su_orden.length >=1?(  
                state.order.Detalle_de_su_orden?.map((item:any, index:any)=>{
                  return(
                    <ClubProductCartCard
                      key={index}
                      arrayPosition={index}
                      productId = {item.plato}
                      comentarios={item.Comentarios}
                      cantidad={item.Cantidad}
                      positionArray={index}
                      editData={item}
                      {...props}
                    />
                  )
                })
              ):(
                <ClubInfoText style={{textAlign:"center", paddingTop: ClubemberTheme.SIZES.BASE_SECURE * 3}}> No tiene productos en su carrito</ClubInfoText>
              )}
            </ScrollView>
          </Block>
          <Block>
            <Text style={styles.subTitle}>Opciones de entrega</Text>
            <ClubDirectionCard {...props}/>
          </Block>
          <Block>
            <Text style={styles.subTitle}>Resumen</Text>
            <ClubResumeCartCard/>
          </Block>
          <ClubButton onPress={()=>{
            props.navigation.navigate(
              'PaymentDetail',
              {
                screen: 'PaymentDetail',
              }
            )
          }} style={{marginBottom: ClubemberTheme.SIZES.BASE_SECURE*3}} defaultButton = {true} shadowless>Ir a pago</ClubButton>
        </ScrollView>
      </Block>
    </View>
  );
};

export default CartDetail;

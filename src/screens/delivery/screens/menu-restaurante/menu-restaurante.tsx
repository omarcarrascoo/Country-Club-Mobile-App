import React, { FC, useEffect, useState } from 'react';
import {Block} from 'galio-framework';
import styles from './styles';
import {ScrollView} from "react-native";
import {ClubemberTheme} from "../../../../constants";
import {RestaurantCard} from "../../../../components/card/restaurant-card/restaurant-card";
import ClubHeaderDelivery from '../../../../components/delivery/delivery-header/delivery-header';
import ClubDeliveryCategoryPicker from '../../../../components/delivery/category-picker/category-picker';
import { getProducts, getProductsCategories } from '../../../../redux/productRedux';


const RestaurantMenu: FC<any> = (props) => {
    const { navigation } = props;
    const {route} = props
    
    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [CategoryPicked, setCategoryPicked] = useState(route.params?.params?.Nombre_Categoria? route.params.params.Nombre_Categoria:"Todos")
    const setAllProducts = async() => {
        const data = await getProducts()
        setProducts(data)
      }
    const setAllCategories = async() =>{
        const categoriesData = await getProductsCategories();
        console.log(categoriesData);
        categoriesData.unshift({Estado: "Activa", Nombre_Categoria: "Todos"})
        setCategories(categoriesData) 
    }
    const setProductsByCategory = async()=>{
        const data = await getProducts()
        const filterProducts = data.filter((item:any)=>item.Categorias_Menu.display_value === CategoryPicked)
        setProducts(filterProducts)
    }
    useEffect(() => {
        setAllCategories()
        if (CategoryPicked === "Todos") {
            setAllProducts()
        } else {
            setProductsByCategory() 
        }
    }, []);
    useEffect(() =>{
        if (CategoryPicked === "Todos") {
            setAllProducts()
        } else {
            setProductsByCategory() 
        }
    }, [CategoryPicked])
    return (
        <Block flex style={styles.container}>
        <Block flex center style={styles.events}>
            
            <ScrollView
                showsVerticalScrollIndicator={false}
                
            >
                <ScrollView showsVerticalScrollIndicator={true}>
                    <Block style = {{marginBottom: ClubemberTheme.SIZES.BASE_SECURE * 1.5}}>
                    <ClubHeaderDelivery
                        title='Menu restaurante'
                        {...props}
                    />
                    <ClubDeliveryCategoryPicker
                        categories={categories}
                        action = {setCategoryPicked}
                        picked ={CategoryPicked}
                    />
                    </Block>
                    <Block
                        row
                        space="between"
                        style={{
                            gap: ClubemberTheme.SIZES.BASE_SECURE / 1.5,
                            flexWrap: 'wrap',
                        }}
                    >
                        
                        {products?.map((item, index) => {
                            return (
                                <RestaurantCard
                                    key={index}
                                    description={item.Descripcion}
                                    title={item.Nombre}
                                    image={item.Foto}
                                    price={item.Precio}
                                    action={() =>
                                        navigation.navigate(
                                            'ProductDetail',
                                            {
                                              screen: 'ProductDetail',
                                              params: { ...item }
                                            }
                                          )
                                    }
                                />
                            );
                        })}
                    </Block>
                </ScrollView>
            </ScrollView>
        </Block>
    </Block>
    )
};

export default RestaurantMenu;

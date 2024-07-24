import React, { FC, useState } from 'react';
import { Block, Text } from 'galio-framework';
import { TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

interface IClubDeliveryCategoryPicker {
  categories: any[],
  picked?: any,
  action?: any
}

const ClubDeliveryCategoryPicker: FC<IClubDeliveryCategoryPicker> = ({
    categories, 
    picked,
    action
}) => {
    const CategoryTitle: FC<any> = ({title, selected}) =>{        
        return(
        <Block style={selected===true&&styles.categoryContainer}>
        <Text style={selected===true?(styles.categoryTitleSelected):(styles.categoryTitle)}>{title}</Text>
        </Block>
        )
    }
    function isValueInCategories(value: string): any {
        return value === picked;
      }
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.categorySection}>
    {categories.map((item, index )=>{
      return(
            <TouchableOpacity key={index}  onPress={()=>{
              action(item.Nombre_Categoria)
            }}>
            <CategoryTitle     
              selected= {isValueInCategories(item.Nombre_Categoria)}
              title={item.Nombre_Categoria}/>
            </TouchableOpacity>
      
      )
    })}
    </ScrollView>

    );
};

export default ClubDeliveryCategoryPicker;
import React, { FC } from 'react';
import { Block } from 'galio-framework';
import ClubTitleCard from '../../general/title-card/title-card';
import { ScrollView, Text } from 'react-native';
import { ClubemberTheme } from '../../../constants';
import ClubCreditItemCard from '../../card/credit-item-card/credit-item-card';
import { ICreditItem } from '../../../interfaces/credits';
import { heightScreen } from '../../../constants/utils';
interface ITransactionsHistory {
  title: string;
  white?: boolean;
  style?: any;
  navigation: any;
  events: ICreditItem[];
  action: any
}

const TransactionsHistory: FC<ITransactionsHistory> = ({
  title,
  navigation,
  white = false,
  style,
  events,
  action
}) => {
  
  return (
    <Block
      flex
      style={[
        {
          paddingBottom: ClubemberTheme.SIZES.BASE_SECURE,
          ...style
        }
      ]}
    >
      <ClubTitleCard
        reloadComponent = {true}
        flex
        withAction
        white={white}
        onPressAction={action}
      >
        {title}
      </ClubTitleCard>

      <Block
        flex
        style={{
          maxHeight: heightScreen - 420
        }}
      >
        <ScrollView showsVerticalScrollIndicator={true}>

          {Object.keys(events).length > 0 ? (
              Object.keys(events).map((key:any) => {
                const item:any = events[key];
                return (
                  <ClubCreditItemCard
                    ticket={item.Foto_Ticket}
                    firma = {item.Firma_del_Socio}
                    key={key}
                    white={white}
                    title={item.ID}
                    amount={item.Monto_del_Credito || item.Abono}
                    dateDivided={item.Added_Time}
                    isPositive={item.Abono ? true : false}
                    action={() => {
                      navigation.navigate('HomeStack', {
                        screen: 'Credits',
                        params: { ...item }
                      });
                    }}
                  />
                );
              })
            ) : (
              <Text>No se han registrados pagos</Text>
            )}

        </ScrollView>
      </Block>
    </Block>
  );
};

export default TransactionsHistory;

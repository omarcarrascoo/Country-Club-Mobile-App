import React, {FC, useEffect, useState} from 'react';
import {Block} from 'galio-framework';
import {ScrollView, TouchableNativeFeedback} from 'react-native';
import NotificationItem from "./notification-item/notification-item";
import {NotificationListStore} from "../../constants/notification-store";
import { getNotifications } from '../../redux/clubInfoRedux';

const NotificationsList: FC<any> =  ({  }) => {

    const[notifications, setNotifications] = useState<any>([])
    useEffect(()=>{
        const setAllInfo = async () =>{
            const data = await getNotifications()
            setNotifications(data)
        }
        setAllInfo()
    },[])
    console.log(notifications);
    
    return (
        <Block flex>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardDismissMode={'on-drag'}
                >

                    {notifications?.map((item:any, index:any) => {
                        return (
                        <NotificationItem
                        key={index}
                        notification={item}
                        action={() =>
                            item.Estado = true
                        }
                        />
            );
            })}
                </ScrollView>
        </Block>
    );
};

export default NotificationsList;

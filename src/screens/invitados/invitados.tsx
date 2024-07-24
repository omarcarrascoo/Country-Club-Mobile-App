import React, {FC, useContext, useEffect, useState} from "react";
import {Block} from "galio-framework";
import styles from "../events/styles";
import {ScrollView} from "react-native";
import NextEvents from "../../components/events/next-events/next-events";
import {EventsListStore} from "../../constants";
import EventActions from "../../components/events/event-actions/event-actions";
import InterestsSection from "../../components/events/interests-section/interests-section";
import ClubTitleCard from "../../components/general/title-card/title-card";
import {InvitationGuestListStore, RecurringGuestListStore} from "../../constants/invitation-store";
import GuestInvitations from "../../components/invitations/guests/guests";
import InvitationActions from "../../components/invitations/invitation-actions/invitation-actions";
import { filterInvitadoByFav, getInvitados } from "../../redux/invitadosRedux";
import { filterDataByCorreo } from "../../services/utils";
import ClubContext from "../../context/context";

const Invitados: FC<any> = (props) => {
    const [invitations, setInvitations] = useState([])
    const [invitadosFav, setInvitadosFav] = useState([])
    const {state} = useContext(ClubContext)
    const [reload, setReload] = useState(false)

    const setAllInvitations = async ()=>{
        let data:any = await getInvitados()
        const filterData = filterDataByCorreo(state.auth.Correo_Electronico, data)
        const favList:any = await filterInvitadoByFav()
        const filterFavList:any = filterDataByCorreo(state.auth.Correo_Electronico, favList)
        setInvitations(filterData)
        console.log(filterFavList);
        
        setInvitadosFav(filterFavList)
    }
    useEffect(()=>{
        setAllInvitations()
    }, [])
    useEffect(()=>{
        setAllInvitations()
    }, [reload])
    return (
        <Block flex style={styles.container}>
            <Block flex center style={styles.events}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.section}
                >
                    <GuestInvitations
                        reloadAction={()=>{
                            setReload(!reload)
                        }}
                        guests={invitations}
                        title={'Tus Invitados de hoy'}
                        {...props}
                        white
                    />
                    <InvitationActions
                        {...props}
                        white
                        title={'Crea un codigo QR'}
                    />
                    <GuestInvitations
                        guests = {invitadosFav}
                        title={'Invitados Frecuentes'}
                        isRecurring={true}
                        {...props}
                        white
                    />
                </ScrollView>
            </Block>
        </Block>
    );
};

export default Invitados;
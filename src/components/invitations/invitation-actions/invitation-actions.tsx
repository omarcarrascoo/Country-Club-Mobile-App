import React, {FC} from "react";
import {Block} from "galio-framework";
import {ClubemberTheme} from "../../../constants";
import ClubTitleCard from "../../general/title-card/title-card";
import {ScrollView} from "react-native";
import {EventsActionStore} from "../../../constants/events-store";
import ClubButtonCard from "../../card/button-card/button-card";
import {InvitationActionsStore} from "../../../constants/invitation-store";

const InvitationActions: FC<any> = ({
                                   title,
                                   navigation,
                                   white = false,
                                   style
                               }) => {
    return (
        <Block
            flex
            style={[
                {
                    paddingBottom: ClubemberTheme.SIZES.BASE,
                    ...style
                }
            ]}
        >
            <ClubTitleCard flex white={white}>
                {title}
            </ClubTitleCard>

            <Block flex>
                <ScrollView horizontal={true}>
                    <Block
                        flex
                        row
                        style={{
                            gap: ClubemberTheme.SIZES.BASE_SECURE / 2
                        }}
                    >
                        {InvitationActionsStore.map((item, index) => {
                            return (
                                <ClubButtonCard
                                    key={index}
                                    action={() =>
                                        navigation.navigate(
                                            item.navigation.stack,
                                            {
                                                screen: item.navigation.screen
                                            }
                                        )
                                    }
                                    description={item.description}
                                    title={item.title}
                                    indexMap={index}
                                />
                            );
                        })}
                    </Block>
                </ScrollView>
            </Block>
        </Block>
    );
};

export default InvitationActions;

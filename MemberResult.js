import React from "react";
import { SafeAreaView, View, Text } from "react-native";

function MemberResult({route}) {
    const {user} = route.params;
    return (
        <SafeAreaView>
            <Text>Üyenin Adı: {user.userName}</Text>
            <Text>Üyenin Soyadı: {user.userSurName}</Text>
            <Text>Üyenin Yaşı: {user.userAge}</Text>
            <Text>Üyenin Maili: {user.userMail}</Text>
        </SafeAreaView>
    )
}

export default MemberResult;
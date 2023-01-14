import React from "react";
import { SafeAreaView,Text, StyleSheet } from "react-native";
import Button from '../component/Button/Button';


function Welcome({navigation}) {
    function goToMemberSign() {
        navigation.navigate('MemberSignScreen');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
            <Button text='Üye Kaydı Oluştur' onPress={goToMemberSign} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 34,
        fontWeight: 'bold',
        margin: 10,
    }
})

export default Welcome;
import React,  {useState} from "react";
import { Alert, SafeAreaView,Text} from "react-native";

import Input from '../component/Input';
import Button from "../component/Button";

function MemberSign({navigation}) {
    const[userName, setUserName] = useState(null);
    const[userSurName, setUserSurName] = useState(null);
    const[userAge, setUserAge] = useState(null);
    const[userMail, setUserMail] = useState(null);

   

    function handleSubmit(){
    if(
        !userName || !userSurName || !userAge || !userMail
    ){Alert.alert('Bilgiler Boş Bırakılamaz!')
    return;
    }
        const user = {
        userName,
        userSurName,
        userAge,
        userMail,
     };
     navigation.navigate('MemberResultScreen', {user})

    }

 
    return(
        <SafeAreaView>
            <Text>Member Sign</Text>
            <Input label="Üye Adı" placeholder="Üye ismini giriniz..."
            onChangeText={setUserName}/>
            <Input label="Üye Soyadı" placeholder="Üye soyismini giriniz..."
            onChangeText={setUserSurName}/>
            <Input label="Üye Yaş" placeholder="Üye yaşını giriniz..."
            onChangeText={setUserAge}/>
            <Input label="Üye E-posta" placeholder="Üye e-posta adresini giriniz..."
            onChangeText={setUserMail}/>
            <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
        </SafeAreaView>
    )
}

export default MemberSign;
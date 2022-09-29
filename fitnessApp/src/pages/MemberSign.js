import {useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurname || !userAge || !userMail || !userLocation) {
      Alert.alert('Ice Fitness', 'Please fill out all fields');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userLocation,
    };
    navigation.navigate('MemberResultScreen', {user});
  }
  return (
    <SafeAreaView>
      <Input
        label="Name"
        placeholder="Enter your name ..."
        onChangeText={setUserName}
      />
      <Input
        label="Surname"
        placeholder="Enter your surname ..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Age"
        placeholder="Enter your age ..."
        onChangeText={setUserAge}
      />
      <Input
        label="Email"
        placeholder="Enter your email ..."
        onChangeText={setUserMail}
      />
      <Input
        label="Location"
        placeholder="Enter your location ..."
        onChangeText={setUserLocation}
      />
      <Button text="Enter" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;

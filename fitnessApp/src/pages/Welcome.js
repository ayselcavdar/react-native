import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Button from '../components/Button/Button';

function Welcome({navigation}) {
  function goToMemberSign() {
    navigation.navigate('MemberSignScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Ice Fitness</Text>
      <Button text="Sign Up" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Welcome;

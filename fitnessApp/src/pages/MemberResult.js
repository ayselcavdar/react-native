import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function MemberResult({route}) {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.message}>Registration Complete!</Text>
      <Text style={styles.label}>Name: {user.userName} </Text>
      <Text style={styles.label}>Surname:{user.userSurname} </Text>
      <Text style={styles.label}>Age:{user.userAge} </Text>
      <Text style={styles.label}>Email:{user.userMail} </Text>
      <Text style={styles.label}>Location:{user.userLocation} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#1976d2',
    padding: 10,
  },
});

export default MemberResult;

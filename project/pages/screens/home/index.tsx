import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Mypage from '../mypage';

const Home = ({navigation}) => {

  return (
    <View>
      <Button title="마이페이지" onPress={() => navigation.navigate('Mypage')} />
      <Text>홈</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Home;
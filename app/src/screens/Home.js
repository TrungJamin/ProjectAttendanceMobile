import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from './../assets/img/undraw_professor_8lrt';
import {DrawerActions} from '@react-navigation/native';
const Home = ({navigation, route}) => {
  // route : {"key": "Home-2gz3Bg_jUj1nEkI-eqWot", "name": "Home", "params": undefined}
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('./../assets/img/circle-photo.jpg')}
        />
        <Text>Welcome Professor TrungJamin</Text>
      </View>
      {/* Picture in the right corner */}
      <View style={styles.pictureCornerContainer}>
        <Icon />
      </View>

      {/* Tab button  */}
      <TouchableOpacity
        style={styles.tabBtnContainer}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text>Tabs</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  avatarContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },

  pictureCornerContainer: {
    bottom: 30,
    right: 18,
    position: 'absolute',
    alignContent: 'flex-end',
  },

  tabBtnContainer: {
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    left: 40,
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 35,
    //borderRadius should be half of the height(or width),
    // more than that will create the same
  },
});
export default Home;

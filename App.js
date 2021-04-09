import React from 'react';
import {View, Text, StyleSheet, Platform, SafeAreaView} from 'react-native';

import Home from './app/src/screens/Home.js';
import Welcome from './app/src/screens/Welcome';
import Classes from './app/src/screens/Classes';

import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Classes" component={Classes} />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <MyDrawer />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
  },
});
export default App;

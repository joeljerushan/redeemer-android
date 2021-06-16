/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import { WebView } from 'react-native-webview';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const deviceHeight = Dimensions.get('window').height;

  const [loading, setLoading] = React.useState(false);

  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: deviceHeight, }}>
        {
          loading ?
          <View style={{ height: deviceHeight, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ width: 100, height: 100, }}
              source={require('./images/logo.png')}
            />
          </View>
          :
          <WebView
            source={{ uri: 'https://www.redeemer.lk/' }} 
            style={{ width: '100%', height: deviceHeight, }}
            startInLoadingState={true}
            renderLoading={() => <View style={{ height: deviceHeight, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ width: 100, height: 100, }}
              source={require('./images/logo.png')}
            />
          </View> } 
          />
        }
      
      
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View, ScrollView,
  Dimensions,
  Button
} from 'react-native';

import WebView from 'react-native-webview';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <ScrollView style={{ display: 'flex', flexDirection: 'column', rowGap: 20, flex: 1 }}>      
      
      <WebView style={{ flex: 1, display: 'flex', height: Dimensions.get('window').height }}
        source={{ uri: "https://synchro-us.com" }}
        onError={(e) => {
          console.log(e)
        }}
      />

      {/* <Button title='Quit' /> */}
    </ScrollView>
  );
}

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

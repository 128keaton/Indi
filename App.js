import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  AsyncStorage,
  Picker,
  ScrollView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import NavigationBar from 'react-native-navbar';

const titleConfig = {
  title: 'Hello, world'
};

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: '',
      model: '',
      serial: '',
      asset: '',
    };
  }

  async saveType() {
    try {
      await AsyncStorage.setItem('@MySuperStore:test', this.state.type);
      console.log('set storage item')

    } catch (error) {
      console.log('Async storage error')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigationBar title={titleConfig}/>
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
          <View
            style={{
            flex: 2,
            backgroundColor: '#9CD6FA'
          }}>
            <Text style={styles.secondaryHeaderText}>Device Type</Text>
            <Picker style={{
            backgroundColor: 'white'
          }}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="Tower" value="tower"/>
              <Picker.Item label="Mobile Device" value="mobile-device"/>
            </Picker>
          </View>
          <View
            style={{
            flex: 2,
            backgroundColor: 'skyblue'
          }}>
            <TextInput
              style={styles.textInput}
              onChangeText={(model) => this.setState({model})}
              placeholder="Model Number"/>
          </View>
          <View
            style={{
            flex: 3,
            backgroundColor: 'steelblue'
          }}>
          <TextInput
              style={styles.textInput}
              onChangeText={(serial) => this.setState({serial})}
              placeholder="Serial Number"/>
          </View>
          <View
            style={{
            flex: 3,
            backgroundColor: '#53728C'
          }}>
          <TextInput
              style={styles.textInput}
              onChangeText={(asset) => this.setState({asset})}
              placeholder="Asset Tag"/>
          </View>
          <Button
            style={{
            flex: 2,
  
          }}
            onPress={() => {
            console.log('button pressed')
            this.saveType()
          }}
            title="Submit"/>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  scrollView: {

  },
  headerText: {
    flex: 1,
    color: "white",
    padding: 12,
    marginTop: 20,
    fontSize: 24,
    textAlign: "center"
  },
  secondaryHeaderText: {
    color: "white",
    fontSize: 20,
    padding: 12
  },
  textInput: {
    flex: 1,
    color: "white",
    padding: 12
  },
  img: {
    borderRadius: 20
  }
});

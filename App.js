import React from 'react';
import type {Node} from 'react';
import {
  ImageComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Component } from 'react/cjs/react.production.min';


class Tiger extends Component{

  render(){
    let tigerImg='';
    if(this.props.type == 'one'){
      tigerImg=require('./assets/tiger.jpeg');
    }else if(this.props.type == 'two'){
      tigerImg=require('./assets/tiger2.jpeg');
    }
    
    return(
      <View>
        <Image source = {tigerImg} style={{width: 100, height: 100}}/>
      </View>
    )
  }
}


class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      address : ''
    }
  }

  writeAddress = () => {
    this.setState({
      address : '경기도 김포시'
    }, function(){
      alert('alert');
    })
  }

  writeReset = () =>{
    this.setState({
      address : ''
    })
  }

  render(){
    return (
    <View style = {styles.container}>
      <Text style = {styles.hello}>Hello World</Text>
      <Tiger type = 'one' />
      <Text>{this.state.address}</Text>
      <Button title = {'나의 주소출력'} onPress={this.writeAddress} />
      <Button title = {'리셋'} onPress={this.writeReset} />
    </View>
    );
    }
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  
  hello :{
    color : 'red'
  }
});


export default App;

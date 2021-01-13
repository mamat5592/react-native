import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';

import {decode} from 'html-entities';
import Question from './question';
import Answers from './answers';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      data : [],
      counter : 1,
      alert_visibility: false
    }

    var answers = [];
    if(this.state.data.length !== 0){
      answers = [...this.state.data[0].incorrect_answers];
      answers.splice(Math.random() * 3, 0, this.state.data[0].correct_answer);
    }
  }

  componentDidMount(){
    fetch('https://opentdb.com/api.php?amount=3&category=19&difficulty=easy&type=multiple')
    .then((response) => response.json())
    .then((json) => this.setState({data:json.results}))
    .catch((error) => console.error(error))
    .finally(() => this.setState({isLoading:false}));
  }

  componentDidUpdate(){
    alert(this.props.sent_answer);
  }

  render(){
    let answers = [];
    if(this.state.data.length !== 0){
      answers = [...this.state.data[0].incorrect_answers];
      answers.splice(Math.random() * 3, 0, this.state.data[0].correct_answer);
    }

    return this.state.isLoading?(
      <View style={styles.body}>
        <Text style={styles.loading}>loading ...</Text>
      </View>
    ):(
      <>
        <StatusBar barStyle="light-content" backgroundColor='black' />
        <SafeAreaView>
          <View style={styles.body}>
            <View style={styles.quizContainer}>
  
              <Question questionText={decode(this.state.data[0].question)} />

              <Answers answers={answers.map((item)=>decode(item))} />
  
            </View>
          </View>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    height:'100%',
    paddingTop:50,
    textAlign:'center',
    fontSize: 24,
    fontWeight: '600'
  },
  quizContainer: {
    backgroundColor:'white',
    height:'100%',
  }
});

const mapStateToProps = (state)=>{
    return state.answer;
}

export default connect(mapStateToProps)(App);

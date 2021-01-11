import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import {connect} from 'react-redux';

import {send_answer} from './redux/action';

class Answers extends Component{

    _onPressButton = (index) => {
        //this.state.data[this.state.counter-1].correct_answer === answers[index] ? this.setState({counter:counter+1}):alert('wrong')
        this.props.send_answer(index);
    }

    render(){
        return(
            <View style={styles.answersContainer}>
                <TouchableOpacity onPress={()=>this._onPressButton(0)} style={[styles.answerContainer,styles.con]} >
                  <Text style={styles.answerText} >{this.props.answers[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPressButton(1)} style={[styles.answerContainer,styles.con]} >
                  <Text style={styles.answerText} >{this.props.answers[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPressButton(2)} style={[styles.answerContainer,styles.con]} >
                  <Text style={styles.answerText} >{this.props.answers[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._onPressButton(3)} style={[styles.answerContainer,styles.con]} >
                  <Text style={styles.answerText} >{this.props.answers[3]}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    answersContainer: {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        margin:10,
        fontSize: 18,
        fontWeight: '400',
        justifyContent:'space-between'
    },
    answerText:{
        marginHorizontal:5,
        textAlign:'center',
        fontSize: 15,
        fontWeight: '300'
    },
    answerContainer: {
        width:'44%',
        height:'43%',
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    },
    con: {
        backgroundColor:'white',
        borderRadius:15,
        shadowColor: "#DDDDDD",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        shadowOffset: {
          width: 0,
          height: 0,
        },
    }
});

export default connect(null, {send_answer})(Answers);
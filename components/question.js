import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Question extends Component{
    render(){
        return(
            <View style={[styles.questionContainer,styles.con]}>
                <Text style={{fontSize: 24,textAlign:'center'}} >{this.props.questionText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    questionContainer: {
        paddingHorizontal:25,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:20,
        flex:1,
        fontWeight: '600',
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

export default Question;
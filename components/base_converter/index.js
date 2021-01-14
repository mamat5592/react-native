import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import {convertBase} from 'simple-base-converter';

class BComponent extends Component{
    constructor(){
        super();

        this.state = {
            base : new Array(15).fill(0),
            text : ''
        }

        this.change = this.change.bind(this);
    }

    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                <View style={styles.base_con} >
                    {
                        this.state.base.map((val,index) => (
                            <View style={styles.single_base_con} key={index} >
                                <Text style={styles.label}>base {index+2} </Text>
                                <TextInput 
                                    style={styles.inp}
                                    value={val.toString()}
                                    onChangeText={(text)=> text!==''?this.change(text, index):null}
                                />
                            </View>
                        ))
                    }
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }

    change(value, index){

        var array = new Array(this.state.base.length);
        for(var i = 0; i < this.state.base.length; i++){
            if(value.includes('.')){ 
                var before = value.split('.')[0];
                var after = value.split('.')[1];

                if(before === ''){
                    array[i] = '.' + convertBase(after, index+2, i+2);
                }else if(after === ''){
                    array[i] = convertBase(before, index+2, i+2) + '.';
                }else{
                    array[i] = convertBase(before, index+2, i+2) + '.' + convertBase(after, index+2, i+2);
                }
            }else array[i] = convertBase(value, index+2, i+2);
        }

        this.setState({base:[...array]})
    }
}


const styles = StyleSheet.create({
    base_con : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '110%',
        marginVertical: '20%',
    },
    single_base_con : {
        display: 'flex',
        flexDirection:'row',
        marginVertical: 5,
        marginHorizontal: 50,
        backgroundColor: '#222831',
        borderWidth: 1,
        borderColor:'#DDDDDD',
        borderRadius:50,
        shadowColor: "#DDDDDD",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        shadowOffset: {
          width: 0,
          height: 0,
        },
    },
    label : {
        flex:1,
        margin: 10,
        minWidth: 100,
        maxWidth: 100,
        textAlign: 'center',
        color: '#DDDDDD',
    },
    inp : {
        flex:1,
        borderWidth: 1,
        borderColor:'#DDDDDD',
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        backgroundColor: 'white',
        textAlign: 'center',
    }
});


export default BComponent;